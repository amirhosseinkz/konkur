# Accessibility And Browser Matrix

Status: Accepted Milestone 2 baseline

## Target

Learner and Admin target WCAG 2.2 Level AA without surface-specific exceptions. Enhanced focus visibility, 44px preferred touch targets and 7:1 primary-reading contrast are quality goals where practical, not false AAA claims.

## Required Behavior

- Complete keyboard operation and visible 2px focus indicator with 2px offset.
- Focus is never fully hidden by sticky headers, sheets or bottom toolbars.
- Skip links, landmarks, correct headings and native semantics before ARIA.
- Modal focus trap and restoration; no keyboard traps elsewhere.
- Reflow at 320 CSS pixels except genuine two-dimensional tables.
- Text zoom to 200%, browser zoom to 400% and user text-spacing overrides without clipping.
- Pointer targets normally reach 44x44px; essential targets never fall below WCAG 2.5.8.
- Drag operations have single-pointer alternatives.
- Authentication supports password managers, paste, autofill and accessible recovery.
- Persian language, RTL direction, mixed-language markers and bidi isolation are verified.
- Non-text content, diagrams and formula media have reviewed alternatives.
- Reduced motion, increased contrast, forced colors and solid-surface preferences are tested.
- Timed workflows define warnings, recovery and accommodation behavior.

## Assistive Technology

Learner-critical flows require NVDA with Firefox or Chrome, VoiceOver with Safari and TalkBack with Chrome Android. Admin requires NVDA and VoiceOver coverage for authentication, navigation, tables, inspectors, forms, publication and audit.

MathML output is tested in all required engines. Unsupported subsets receive an accessible server-rendered fallback without rasterizing formulas.

## Browser Support

Support is relative to GA:

| Platform | Required versions |
|---|---|
| Chrome desktop | Current and previous major |
| Edge desktop | Current and previous major |
| Firefox desktop | Current and previous major |
| Safari macOS | Current and previous major |
| Safari iOS/iPadOS | Current and previous major OS release |
| Chrome Android | Current and previous major |
| Android System WebView | Current stable |
| Samsung Internet | Current and previous major |
| Embedded social/payment webviews | Best effort plus explicit open-in-browser recovery |

Test supported Windows, current and previous macOS/iOS and representative low- and mid-range Android hardware.

## Progressive Enhancement

Core flows do not require backdrop filters, `@starting-style`, View Transitions, CSS anchor positioning or reduced-transparency detection. Unsupported visual features fall back to opaque surfaces and immediate rendering. Public and learner pages serve critical CSS, fonts and icons locally. Internet Explorer is unsupported.

## Evidence

Every production feature records automated axe results, keyboard evidence, responsive screenshots at 320, 390, 768, 1024 and 1440px, zoom/reflow checks, bidi fixtures and applicable screen-reader results. Serious or critical automated findings and unresolved task-blocking manual findings fail release.
