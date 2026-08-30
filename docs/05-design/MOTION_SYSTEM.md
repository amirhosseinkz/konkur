# Motion System

Status: Accepted Milestone 2 baseline

## Perspective Weighting

- Primary: Jakub Krehel for subtle production polish in a consumer learning product.
- Secondary: Emil Kowalski for restraint and speed in high-frequency study and Admin interactions.
- Selective: Jhey Tompkins only for rare onboarding explanation, never exam or routine workflow motion.
- Apple principles govern direct manipulation, velocity handoff, interruption and spatial consistency.

## Gate

Motion requires one named purpose: feedback, spatial continuity, state explanation, direct manipulation or preventing a jarring change. If no purpose exists, the state changes instantly.

| Frequency | Rule |
|---|---|
| Hundreds per day or keyboard initiated | No animation |
| Tens per day | Instant or near-imperceptible feedback |
| Occasional overlay or mode change | Standard restrained motion |
| Rare onboarding explanation | Limited expressive motion allowed |

Do not animate timers, routine scoring, table sorting/filtering, keyboard navigation, every list item, routine chart updates, decorative backgrounds or high-frequency exam navigation.

## Tokens

```css
--motion-fast: 100ms;
--motion-base: 160ms;
--motion-enter: 200ms;
--motion-exit: 140ms;
--motion-sheet: 260ms;
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-move: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
```

## Behaviors

| Interaction | Contract |
|---|---|
| Button press | Respond on pointer-down; scale to `0.98` over 100ms |
| Icon-button press | Scale to `0.96` over 100ms |
| Release | Return to `1` over 160ms with `--ease-out` |
| Tooltip | Opacity and 2px translation over 125ms; subsequent group tooltips may be instant |
| Popover | Scale `0.98` to `1` and opacity over 160ms from the trigger origin; exit 120ms |
| Dialog | Center-origin scale `0.98` to `1` and opacity over 200ms; exit 140ms |
| Toast | Opacity and 8px same-path translation over 200ms; exit 140ms |
| Non-gesture sheet | Physical-edge translation over 260ms using `--ease-drawer` |
| Drag settle | Critically damped spring, damping ratio `1.0`, response `0.34s` |
| Momentum dismissal | Damping ratio `0.86`, response `0.32s`, no decorative bounce |

Use CSS transitions or WAAPI for predetermined motion. Use `motion` only when a gesture needs interruption, velocity or a spring. Animate `transform` and `opacity`; `clip-path` requires a reviewed exception. Never use `transition: all`, `scale(0)`, layout-property animation or ungated touch hover.

Entry and exit follow the same path; exit is faster and quieter. Popovers originate at their trigger. Dialogs remain viewport-centered. Rapid re-triggering must retarget from the current presentation value rather than queue.

## Gestures

- Use Pointer Events and pointer capture.
- Preserve grab offset and track 1:1 after an approximately 10px intent threshold.
- Ignore secondary touch points.
- Carry release velocity into the spring.
- Allow an in-flight surface to be grabbed and reversed.
- Apply progressive edge resistance rather than a hard stop.
- Provide a button or keyboard alternative for every drag action.

## Accessibility

Reduced motion removes spatial transforms and springs while retaining at most a 100ms opacity transition when it clarifies state. Reduced transparency uses opaque surfaces. Increased contrast strengthens boundaries and removes shadow-only separation. Forced colors preserve system colors and native focus.

No looping attention motion ships. Any rare ambient explanation must pause and stop under reduced motion. All tasks remain complete with animation disabled.

## Review Gate

Automated source checks reject `transition: all`, `scale(0)`, unapproved UI motion over 300ms, layout-property animation, essential hover-only behavior and gesture-only operations. Manual review tests rapid interruption, origin, same-path exit, reduced preferences and real-device touch behavior.
