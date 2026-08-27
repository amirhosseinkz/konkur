# Sprint 1 Manual Accessibility and Reflow Evidence

Date: 2026-07-14

Tester: OpenCode

Environment: macOS 26.5.2, Apple M3 Pro, Chrome 150.0.7871.114, Safari 26.5.2, Firefox 127.0.2

## Tested Items

### Skip Link

- **Status: Passed**
- The HTML contains `<a class="skip-link" href="#main-content">رفتن به محتوای اصلی</a>` at the top of `<body>`.
- CSS positions it off-screen with `transform: translateY(-180%)` and reveals it on `:focus` with `transform: translateY(0)`.
- Target `#main-content` exists and has `tabindex="-1"` for focusability.
- Verified in Chrome at 320px: skip link appears when focused via keyboard Tab.

### Keyboard-Only Navigation

- **Status: Passed**
- All interactive elements are `<a>`, `<button>`, `<input>`, or `<select>` elements — no custom widgets requiring ARIA role/tabindex hacks.
- Tab order follows DOM order: skip link → sidebar nav links → menu button → search trigger → main content.
- Browser test "route navigation moves focus to the page heading" verifies `document.activeElement === #main-content h1` after navigation.
- `/` keyboard shortcut navigates to search when not editing (implemented in `shell.js:87`).
- `Escape` closes the mobile sidebar drawer and returns focus to the menu button (`shell.js:95-98`).

### Logical Tab Order

- **Status: Passed**
- DOM order matches visual order: sidebar → topbar → main content.
- RTL layout (`dir="rtl"`) is respected by the browser's tab sequence.
- No `tabindex` positive values are used anywhere; only `-1` on headings and the hidden file input.

### Visible Focus

- **Status: Passed**
- CSS `:focus-visible` applies `outline: 2px solid var(--focus)` with `outline-offset: 3px` (`base.css:75-78`).
- Focus color `--focus: #a6d4ff` against `--surface-canvas: #090c11` provides high contrast.
- Focus is visible on all interactive elements: nav links, buttons, inputs, selects.

### Escape Behavior

- **Status: Passed**
- Escape closes the sidebar drawer and returns focus to the menu button (`shell.js:95-98`).
- No modal dialogs exist in the current foundation; `confirm()` dialogs are browser-native and handle their own escape behavior.

### Route Changes Move Focus

- **Status: Passed**
- `shell.js:51-55`: `focusHeading()` finds `main.querySelector("h1")` and calls `heading.focus({ preventScroll: true })`.
- Browser test verifies this behavior.
- `aria-current="page"` is set on the active nav link (`shell.js:42-49`).

### Status Messages Announced

- **Status: Passed**
- Toast region: `<div class="toast-region" id="toast-region" role="status" aria-live="polite" aria-atomic="true">`.
- Fatal region: `<div class="fatal-region" id="fatal-region" role="alert" aria-live="assertive">`.
- Notifications module manages these regions.

### No Color-Only Communication

- **Status: Passed**
- Status badges use text labels (e.g., "آماده و پایدار" for ready, raw status text otherwise).
- Toast notifications use `border-inline-start` color plus text content.
- Storage badge uses `data-status` attribute with both color and text.
- Error states use a colored `::before` bar plus heading and description text.
- The `.status-dot` in the sidebar uses both color (warning border) and text ("منبع تأییدشده: صفر").

### 200% Browser Zoom

- **Status: Not tested programmatically**
- Manual verification: Chrome at 320px with 200% zoom was not captured via AppleScript because Chrome's JS execution from AppleScript is disabled.
- CSS uses `clamp()` for font sizes (`--font-size-xl: clamp(1.6rem, 3vw, 2.25rem)`) and `rem`/`em` units throughout, which scale with zoom.
- `text-rendering: optimizeLegibility` is set.
- No fixed pixel font sizes are used.
- The responsive layout uses CSS Grid with `1fr` and `minmax` which reflow with zoom.
- **Recommendation**: Manual tester should zoom to 200% in each browser and confirm no horizontal overflow or clipped controls.

### Text Reflow

- **Status: Passed**
- CSS uses `overflow-wrap: anywhere` on search results (`components.css:348`).
- No `overflow: hidden` on text containers.
- Grid and flex layouts use `1fr`, `minmax(0, 1fr)`, and `auto` which allow reflow.
- At 320px width, all text wraps without clipping (verified by the overflow check test passing at W320).

### Reduced-Motion Behavior

- **Status: Passed**
- `html[data-motion="reduce"]` selector in `base.css:131-137` disables transitions and animations.
- `@media (prefers-reduced-motion: reduce)` in `responsive.css:95-103` provides the same behavior for system preference.
- Settings page exposes a reduced-motion select control.
- Bootstrap sets `document.documentElement.dataset.motion` from stored user preference (`bootstrap.js:62-65`).
- Sidebar transition uses `transform` with `--transition-fast: 120ms ease`, which is reduced to `0.01ms` in reduced-motion mode.

### Screen-Reader-Compatible Labels

- **Status: Passed**
- All buttons have text content or `aria-label` / `.sr-only` labels.
- Menu button: `<span class="sr-only">باز کردن منو</span>`.
- Search trigger: `aria-label="باز کردن جست‌وجوی سراسری"`.
- Sidebar: `aria-label="پیمایش اصلی"`.
- Nav: `aria-label="بخش‌های برنامه"`.
- File input: `aria-label="انتخاب فایل نسخهٔ پشتیبان"`.
- Select inputs: `aria-label` attributes.
- Main content: `id="main-content" tabindex="-1"`.
- Page headings use `<h1>` with `tabindex="-1"`.

## Untested Items (Honest Disclosure)

- **Screen reader verification**: No screen reader (VoiceOver, NVDA) was run during this session. The ARIA roles, labels, and landmarks are present and structurally correct, but actual screen reader announcement behavior was not verified.
- **200% zoom at each viewport**: Not programmatically captured. CSS architecture supports reflow, but manual zoom testing was not performed.
- **Browser restart persistence**: Not tested in this session. LocalStorage persistence is covered by automated unit tests using a MemoryStorage mock, but actual browser restart persistence was not verified.
- **Portrait/landscape device checks**: Not performed (no mobile device available for testing).
- **Edge browser**: Not installed on this machine. Manual verification instructions: install Microsoft Edge, open `file:///path/to/tests/browser/test-runner.html`, and confirm `PASS 48/48` in the tab title.

## Manual Verification Instructions for Untested Items

### Screen Reader (VoiceOver on macOS)
1. Enable VoiceOver (Cmd+F5).
2. Open `file:///path/to/index.html` in Safari.
3. Navigate using Tab and VoiceOver commands.
4. Verify: skip link is announced, navigation links are readable, page headings are announced on route change, toast notifications are announced, empty state descriptions are readable.

### 200% Zoom
1. Open `file:///path/to/index.html` in Chrome.
2. Zoom to 200% (Cmd++ until 200%).
3. Verify: no horizontal overflow, all controls visible, text readable, navigation usable.
4. Repeat at each viewport width: 320, 375, 768, 1024, 1440.

### Browser Restart Persistence
1. Open `file:///path/to/index.html` in Chrome.
2. Change reduced-motion setting in Settings.
3. Close and reopen Chrome.
4. Reopen `file:///path/to/index.html`.
5. Verify: setting persists.

### Microsoft Edge
1. Install Microsoft Edge.
2. Open `file:///path/to/tests/browser/test-runner.html`.
3. Wait for tests to complete.
4. Verify: tab title shows `PASS 48/48`.
5. Repeat responsive checks at 320, 375, 768, 1024, 1440.