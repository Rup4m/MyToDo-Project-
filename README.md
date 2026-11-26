# Todo Project
A mobile-first personal project tracker, designed & developed by Rupam Debnath. Built with vanilla HTML, CSS and JavaScript; no dependencies, build step, database, or paid APIs.

## Run
Open `index.html` directly, or use `python -m http.server 8000` in this directory and visit `http://localhost:8000`. For GitHub Pages, upload these files to the root of a repository, then Settings → Pages → Deploy from a branch → main / root. HTTPS is recommended for clipboard access.

## Features
13 initial projects, create/edit/delete, pending/in-progress/completed status, priorities, due dates, milestone checkboxes, notes, search, status filters, four sort orders, progress overview, dark mode, JSON backup/restore, project import/share links, responsive design, portfolio and GitHub contact links.

## ChatGPT integration
After deploying, tell ChatGPT the exact public URL and ask it to include an **Add to Todo Project** link for concrete project ideas. The app's Settings → Copy ChatGPT instructions button provides the protocol. Links use:

```
https://YOUR-DEPLOYED-URL/#import=<URL-encoded JSON>
```

Example project object:
```json
{"title":"My new project","description":"Build a prototype","category":"DevOps","tech":["Docker"],"priority":"medium","status":"pending","checklist":["Plan","Build","Test"],"notes":""}
```
Generate a link with JavaScript: `baseUrl + '#import=' + encodeURIComponent(JSON.stringify(project))`. The app opens an editable import preview; nothing is added until the user saves. Do not put secrets into links. URL fragments are not sent in normal HTTP requests, but are visible to the browser and anyone who receives the link.

ChatGPT cannot install a persistent custom button into its own chat interface or automatically write to this site's browser storage. A future response can contain a standard import link, but the app does not automatically sync ChatGPT memory. This static version stores data in localStorage on the current browser/origin; use export/restore for other devices. Clearing browser data can delete projects. No login or cloud sync is provided. Portfolio and GitHub are used as contact links; no unverified email or phone is included.

## Copyright
© Rupam Debnath. All rights reserved.
