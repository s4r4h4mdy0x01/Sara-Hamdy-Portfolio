# Sara Hamdy — Portfolio

A responsive, single-page portfolio built with HTML, CSS, and vanilla JavaScript. The original dark navy/cyan visual identity and supplied profile photo are preserved.

## What's included
- Hero section with personal portrait, role, CV download, and project navigation.
- Expanded About section and five detailed technical-skill groups.
- Professional experience and a clearly separated Backend .NET practical-learning entry.
- Project cards with expandable detail dialogs for overview, contribution, technologies, and project notes.
- Education, graduation project achievement, GDSC volunteering, and contact links including WhatsApp.
- Responsive navigation, scroll progress, reveal animations, and reduced-motion support.

## Run locally
Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to Vercel
1. Extract this ZIP.
2. Push the project folder to a GitHub repository.
3. In Vercel, choose **Add New → Project** and import that repository.
4. Keep Framework Preset as **Other**.
5. Leave Build Command and Output Directory empty/default (the project is static; `index.html` is at the root).
6. Click **Deploy**.

## Before publishing
- The supplied project graphics are illustrative SVG thumbnails, not screenshots of the actual applications.
- Project links currently open the GitHub profile because individual repository URLs were not provided. Replace them with the exact repositories if/when you want to make them public.
- Review phone numbers and contact links before publishing.
- The ASP.NET Core entry is presented as practical learning/implementation, not as a separate formal job.
- The CV PDF included in `assets/` is the original file supplied with the project.

## Main files
- `index.html` — page content and sections
- `styles.css` — visual design and responsive layout
- `script.js` — navigation, reveal animations, and project detail dialogs
- `assets/` — supplied portrait, CV, and project illustrations
