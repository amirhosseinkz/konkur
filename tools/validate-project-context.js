"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function readStructured(relativePath) {
  const absolutePath = path.join(root, relativePath);
  try {
    return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  } catch (error) {
    throw new Error(`${relativePath}: ${error.message}`);
  }
}

function assert(condition, message, issues) {
  if (!condition) {
    issues.push(message);
  }
}

function validate() {
  const issues = [];
  const context = readStructured("project/context.yaml");
  const state = readStructured("project/state.yaml");
  const roadmap = readStructured("project/roadmap.yaml");

  [context, state, roadmap].forEach((document, index) => {
    const name = ["context", "state", "roadmap"][index];
    assert(document.schema_version === 1, `${name}: unsupported schema_version`, issues);
    assert(document.project_id === context.project_id, `${name}: project_id mismatch`, issues);
  });

  assert(context.product.public_release_model === "general-availability-only", "context: public release model drift", issues);
  assert(context.surfaces.learner.type === "single-responsive-website", "context: learner surface must be one responsive website", issues);
  assert(context.surfaces.learner.native_application === false, "context: native learner application is out of scope", issues);
  assert(context.ai.core_dependency === false, "context: AI cannot be a core dependency", issues);
  assert(context.release.public_mvp === false && context.release.public_beta === false, "context: partial public release is prohibited", issues);

  const requiredDecisions = ["D-001", "D-002", "D-003", "D-004", "D-005", "D-006"];
  const decisionIds = new Set(context.stable_decisions.map((decision) => decision.id));
  requiredDecisions.forEach((id) => assert(decisionIds.has(id), `context: missing stable decision ${id}`, issues));
  context.stable_decisions.forEach((decision) => {
    assert(decision.status === "accepted", `context: decision ${decision.id} is not accepted`, issues);
    assert(fs.existsSync(path.join(root, decision.adr)), `context: ADR not found for ${decision.id}: ${decision.adr}`, issues);
  });

  context.required_documents.forEach((relativePath) => {
    assert(fs.existsSync(path.join(root, relativePath)), `context: required document missing: ${relativePath}`, issues);
  });

  assert(Array.isArray(roadmap.milestones) && roadmap.milestones.length > 0, "roadmap: milestones are required", issues);
  const milestones = new Map();
  roadmap.milestones.forEach((milestone) => {
    assert(!milestones.has(milestone.id), `roadmap: duplicate milestone ${milestone.id}`, issues);
    milestones.set(milestone.id, milestone);
  });

  roadmap.milestones.forEach((milestone) => {
    milestone.dependencies.forEach((dependency) => {
      assert(milestones.has(dependency), `roadmap: ${milestone.id} has unknown dependency ${dependency}`, issues);
      if (milestone.status === "in-progress" || milestone.status === "ready" || milestone.status === "completed") {
        const dependencyMilestone = milestones.get(dependency);
        assert(dependencyMilestone && dependencyMilestone.status === "completed", `roadmap: ${milestone.id} started before ${dependency} completed`, issues);
      }
    });
    if (milestone.id !== "milestone-8") {
      assert(milestone.public_release === false, `roadmap: ${milestone.id} cannot be a public release`, issues);
    }
  });

  const publicMilestones = roadmap.milestones.filter((milestone) => milestone.public_release);
  assert(publicMilestones.length === 1 && publicMilestones[0].id === "milestone-8", "roadmap: only milestone-8 may release publicly", issues);

  const actionableMilestones = roadmap.milestones.filter((milestone) => ["in-progress", "ready"].includes(milestone.status));
  assert(actionableMilestones.length === 1, `roadmap: expected one actionable milestone, found ${actionableMilestones.length}`, issues);

  const activeMilestone = milestones.get(state.active_milestone_id);
  assert(Boolean(activeMilestone), `state: active milestone not found: ${state.active_milestone_id}`, issues);
  if (activeMilestone) {
    assert(["in-progress", "ready"].includes(activeMilestone.status), `state: active milestone ${activeMilestone.id} has status ${activeMilestone.status}`, issues);
    assert(actionableMilestones.length === 1 && actionableMilestones[0].id === activeMilestone.id, "state: active milestone does not match roadmap action", issues);
  }
  assert(state.active_workstream && ["in-progress", "ready"].includes(state.active_workstream.status), "state: one active or ready workstream is required", issues);

  state.completed_milestone_ids.forEach((id) => {
    const milestone = milestones.get(id);
    assert(Boolean(milestone), `state: completed milestone not found: ${id}`, issues);
    assert(milestone && milestone.status === "completed", `state: completed milestone ${id} is not completed in roadmap`, issues);
  });

  if (issues.length > 0) {
    console.error(`Project context validation failed with ${issues.length} issue(s):`);
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Project context valid: ${roadmap.milestones.length} milestones, ${context.stable_decisions.length} accepted decisions, active ${state.active_milestone_id}.`);
}

try {
  validate();
} catch (error) {
  console.error(`Project context validation failed: ${error.message}`);
  process.exitCode = 1;
}
