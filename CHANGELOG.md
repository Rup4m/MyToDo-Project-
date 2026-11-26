# Workspace v2.1
- Quiet borderless surfaces, compact typography, category colors and circular FAB.
- Expandable search, All/Active/Done segments, detailed status filters in sort sheet, list/board toggle.
- Three-row cards retain details and quick actions; summary hides zero progress and absent deadlines. Today shows actionable next tasks.
- Existing storage, import, security and backup format unchanged. Uses local Inter/Geist/Instrument Serif if installed, otherwise system/Georgia fallbacks; no external fonts loaded.
- Brief ended mid-card specification; third row combines progress and priority/deadline/status. Optional pinning not added.
- JavaScript syntax and static ID references checked; live browser and deployment testing pending.

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
