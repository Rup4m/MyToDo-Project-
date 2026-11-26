# Workspace v2
- Compact app bar with custom monogram, time-based greeting and real project/task/deadline totals.
- Task completion ring; positive-only stat chips; counted status filters and sort sheet.
- Compact full-card tap targets, progress bars, priority and deadline metadata, two tags, long-press and horizontal swipe actions with visible overflow fallback.
- Five-slot mobile navigation, raised add button, deadline agenda, separate settings, desktop sidebar and responsive grid.
- Contextual empty states, reversible project/task actions, visible focus, reduced motion and light/dark tokens in tokens.css.
- Existing localStorage keys, JSON backup schema, project editor, import protocol, copyright, contact links and Cloudflare authentication middleware remain unchanged.
- Density compromise: mobile cards use 12px vertical and 16px horizontal padding; actual number visible depends on screen height and titles.
- Skeleton styling is available but no artificial loading delay is introduced for synchronous localStorage data.
- Validation: JavaScript parses successfully; all referenced static HTML IDs exist. Browser gesture, contrast audit, live deployment and visual regression testing remain to be performed.
