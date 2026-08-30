# Konkur Design System

Status: Accepted Milestone 2 baseline

## Design Read

Konkur is a trust-first Persian exam-preparation product for time-pressured learners. Its visual language is editorial, precise, calm and moderately dense. It is not a generic dashboard, tutoring marketplace, school portal or gamified habit app.

```text
Next action > exam context > supporting evidence > optional exploration
```

## Skill Application

| Guidance | Correct scope in Konkur |
|---|---|
| `ui-ux-pro-max` | System-wide accessibility, responsive layout, tokens, forms, interaction and data guidance |
| `design-taste-frontend` | Public and marketing composition only; explicitly excluded from Admin and multi-step learner UI by its own scope |
| `design-motion-principles` | Purpose and frequency gates, production motion and reduced-motion behavior |
| Apple design guidance | Direct response, spatial consistency, interruptibility, gestures, materials and platform accessibility |
| Emil design engineering | Restraint, fast feedback, origin-aware overlays and anti-animation discipline |
| Awesome Claude Design reference | Directional inspiration only; no one-to-one brand imitation |

Design dials:

| Surface | Variance | Motion | Density |
|---|---:|---:|---:|
| Public/marketing | 7 | 4 | 3 |
| Learner application | 4 | 2 | 5 |
| Timed exam | 2 | 1 | 5 |
| Admin | 3 | 1 | 8 |

The UI Pro Max search returned a generic trust-blue/orange system and Latin typography. Those are rejected as a final direction. Konkur instead uses a Persian-capable type system, warm paper neutrals and restrained turquoise derived from the education guidance but tuned for verified contrast and product character.

## Visual Character

- Calm under pressure, never celebratory or anxious.
- Dense information is grouped by hierarchy, rules and spacing before containers.
- Persian identity comes from typography, RTL composition, precise language and number handling, not ornamental motifs.
- The learner sees one dominant next action, not a grid of equal metrics.
- Public pages may be more expressive than authenticated tasks.
- Exam routes remove nonessential chrome and motion.
- Admin is squarer, denser and operational, with no learner motivation patterns.

## Token Architecture

Tokens use three layers:

```text
primitive value -> semantic purpose -> component alias
```

Components consume semantic or component tokens only. Raw hex, spacing and motion values do not appear in component code.

## Color

```css
:root,
[data-theme="light"] {
  color-scheme: light;
  --color-canvas: #f7f7f3;
  --color-surface: #ffffff;
  --color-surface-subtle: #f0f1ed;
  --color-surface-raised: #ffffff;
  --color-text: #17201e;
  --color-text-muted: #52605d;
  --color-text-subtle: #687470;
  --color-border: #d5dcd8;
  --color-border-strong: #9eaaa5;
  --color-border-control: #687470;
  --color-primary: #006b67;
  --color-primary-hover: #005a57;
  --color-primary-pressed: #004b49;
  --color-on-primary: #ffffff;
  --color-primary-subtle: #e0f3f0;
  --color-on-primary-subtle: #124e4b;
  --color-link: #005e99;
  --color-focus: #0b72b9;
  --color-selection: #c8e9e5;
  --color-success: #177245;
  --color-success-surface: #ddf3e6;
  --color-warning: #8a5700;
  --color-warning-surface: #f8ebcb;
  --color-danger: #b42335;
  --color-danger-surface: #fce2e5;
  --color-info: #006a9c;
  --color-info-surface: #ddeff8;
  --color-admin-accent: #2f5ea8;
  --color-scrim: rgb(10 18 16 / 48%);
}

[data-theme="dark"] {
  color-scheme: dark;
  --color-canvas: #0f1413;
  --color-surface: #151b1a;
  --color-surface-subtle: #1d2523;
  --color-surface-raised: #222b29;
  --color-text: #f3f5f1;
  --color-text-muted: #b8c3bf;
  --color-text-subtle: #97a49f;
  --color-border: #34413e;
  --color-border-strong: #53635f;
  --color-border-control: #71817c;
  --color-primary: #5cc9c0;
  --color-primary-hover: #75d8d0;
  --color-primary-pressed: #43b4ac;
  --color-on-primary: #081614;
  --color-primary-subtle: #173c39;
  --color-on-primary-subtle: #9fe4de;
  --color-link: #79c8f2;
  --color-focus: #9bd8ff;
  --color-selection: #22524d;
  --color-success: #63d39a;
  --color-success-surface: #173a2a;
  --color-warning: #f2c36b;
  --color-warning-surface: #3b2d12;
  --color-danger: #ff8c98;
  --color-danger-surface: #451f25;
  --color-info: #77cdf5;
  --color-info-surface: #173442;
  --color-admin-accent: #8cb7ff;
  --color-scrim: rgb(0 0 0 / 64%);
}
```

Verified contrast ratios:

| Pair | Light | Dark |
|---|---:|---:|
| Primary text on canvas | 15.50:1 | 16.94:1 |
| Muted text on canvas | 6.13:1 | 10.26:1 |
| Subtle text on canvas | 4.53:1 | 7.19:1 |
| Primary button | 6.37:1 | 9.31:1 |
| Link on canvas | 6.39:1 | 10.05:1 |

Normal text reaches 4.5:1, essential graphics and large text reach 3:1 and primary reading text targets 7:1 where practical. Color never carries status alone.

## Typography

Use self-hosted Vazirmatn variable WOFF2 under its open license.

```css
--font-sans: "Vazirmatn", Tahoma, Arial, sans-serif;
--font-code: ui-monospace, "SFMono-Regular", Consolas, monospace;
--font-math: "STIX Two Math", math;
```

- Use weights 400, 500, 600 and 700.
- Do not add arbitrary letter spacing to Persian text.
- Use tabular numbers for timers, prices and aligned metrics.
- Keep learner prose between approximately 45 and 75 Persian characters per line.
- Self-host fonts, preload only the primary above-fold file and use `font-display: swap`.

| Token | Size / line height | Weight | Use |
|---|---|---:|---|
| Caption | 12 / 20px | 500 | Metadata and provenance |
| Label | 13 / 20px | 600 | Fields and table headers |
| Body small | 14 / 24px | 400 | Secondary UI and Admin |
| Body | 16 / 28px | 400 | Learner UI and prose |
| Body large | 18 / 30px | 400 | Introductory copy |
| Title small | 20 / 32px | 600 | Section heading |
| Title | 24 / 36px | 700 | Page heading |
| Display small | 32 / 44px | 700 | Compact public hero |
| Display | 40 / 52px | 700 | Wide public hero only |

## Spacing, Shape And Depth

Spacing follows a 4px base: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80`.

Radii: `4px` detail, `8px` controls, `12px` popovers/dialogs, `16px` exposed mobile-sheet corners. Round pills are limited to short status, filters and segmented controls.

At least 80% of visible surfaces remain at elevation zero. Use spacing and thin rules before cards. Shadows are reserved for floating chrome and overlays; dark mode also requires a boundary.

## Responsive Layout

| Mode | Width | Shell behavior |
|---|---|---|
| Compact | 0-599px | Complete single-column learner flow and bottom navigation |
| Medium | 600-899px | Single or split column with optional context rail |
| Wide | 900-1199px | Logical-start navigation rail, central task, optional end context |
| Extra wide | 1200px+ | Maximum 1200px learner shell; reading width stays constrained |

Use container queries near `320px`, `560px` and `800px` for component composition. Use logical CSS properties, preserve DOM reading order, account for safe areas and use `100dvh` with fallback for task surfaces.

## Learner Composition

Authenticated entry contains the current exam context, one dominant next action, a brief reason, today's bounded agenda, due mistake review and a compact evidence summary. Search and plan override are secondary.

Desktop RTL places primary navigation at logical start on the right, the active task centrally and optional context at logical end on the left. Mobile uses no more than four persistent destinations: Plan, Study, Review and Account. Search remains explicit and no core action hides only in a hamburger menu.

Lessons use one readable column. Recognition rules, traps, formulas and examples are editorial blocks rather than decorative cards. Practice presents one question at a time on compact screens. Feedback stays adjacent to the answer and uses neutral evidence language.

## Admin Composition

Admin uses a 224px start navigation, flexible work area, optional 320-400px end inspector and 48px operational bar on wide screens. Rows default to 40px, controls to 40px and expert-only dense rows may reach 36px while retaining an adequate hit target.

Tables, split panes and compact query bars replace card grids. Environment and role are always visible in text. Correctness-sensitive editing uses dedicated routes. Bulk operations state selected count and effect. Narrow layouts preserve all data through scrolling, sticky identifiers and dedicated inspector routes.

## Components

Required families include foundations and layout, actions and fields, navigation, overlays and feedback, learner content, assessment controls and Admin data operations. Every applicable component defines default, hover, pressed, focus-visible, selected, disabled, loading, error, offline and read-only states.

Behavior primitives come from React Aria Components where they fit. Konkur owns markup composition, styling, tokens and product semantics. No copied template theme or mixed design-system language is allowed.

## RTL, Bidi, Math And Code

- Root document uses `lang="fa-IR" dir="rtl"`.
- Use logical spacing, borders and positioning.
- Use `<bdi>` or `dir="auto"` for unknown-direction names.
- Isolate URLs, emails, hashes, file paths, IDs and code with `dir="ltr"` and `unicode-bidi: isolate`.
- Mirror directional navigation icons, not media, status, attachment, search or brand icons.
- Localize learner numbers with `Intl.NumberFormat("fa-IR")`; preserve canonical machine values.
- Render formulas as semantic MathML with LTR isolation and STIX Two Math.
- Code remains exact, LTR, left-aligned and independently scrollable.

## Forms And Feedback

Labels remain visible. Placeholders are examples. Validate syntax on blur and full validity on submission. Preserve values after server errors, place errors next to fields and provide a linked error summary. Authentication supports paste, autofill and password managers. OTP accepts full-code paste rather than six inaccessible fields.

Toasts never contain the only copy of an error or critical outcome. Important exam, payment, publication and account states remain in the page. Loading under 300ms has no indicator; longer work shows stable local status without artificial delays.

## Exam Surface

Timed exams remove nonessential chrome and decorative motion. A sticky top region contains title, time, connection and autosave state. Compact screens use a sticky bottom action region. Previous, next, mark-for-review and finish remain explicit.

Timers do not animate and screen readers do not hear every second. Autosave distinguishes saving, saved, offline and failed. Final submission summarizes unanswered and marked questions. Entitlement expiry never terminates an active exam.

## Data Visualization

Prefer direct statements, then small tables, then bar, line or dot plots. Avoid gauges, radial mastery rings, donut charts and unknown denominators. Every chart exposes its data table, scope, denominator, period and update time. Series use labels plus line styles, symbols or patterns; routine chart changes do not animate.

## Anti-Template Gate

The following fail review:

- equal-weight metric-card dashboards;
- default three-column feature cards;
- rounded containers around every text group;
- AI-purple gradients, glowing blobs or glass on every surface;
- tutoring marketplace portraits, ratings or catalogs;
- streaks, XP, badges, leaderboards, fire icons or anxiety countdowns;
- red/green-only answer feedback;
- a permanent AI chat bubble competing with the next action;
- excessive pills, ornamental Persian motifs or decorative calligraphy;
- more than one filled primary action in one decision region;
- animation added only to make the interface feel alive.

Public pages additionally follow the `design-taste-frontend` preflight: one visual theme, one accent system, no duplicate CTA intent, no repeated section-layout family, no oversized empty hero, no decorative scroll cues and no generic placeholder imagery.
