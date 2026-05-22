EYE AMBASSADORS CLINIC — Website Package
==========================================
Built for Dr. Peter Aina · Ayetoro, Epe, Lagos
© 2026 Eye Ambassadors


FOLDER STRUCTURE
────────────────
Eye-Ambassadors-Clinic/
├── index.html        ← Main website page
├── style.css         ← All styles and layout
├── script.js         ← Animations, lightbox, booking form
├── logo.png          ← Place your logo file here
├── assets/           ← Reserved for future assets
├── images/           ← Place all images here (see list below)
└── README.txt        ← This file


IMAGES NEEDED
─────────────
Place these image files inside the images/ folder:

  hero.jpg         — Dr. Aina or clinic hero photo (portrait orientation)
  about.jpg        — Dr. Aina in clinic (portrait, 4:5 ratio works best)
  gallery-1.jpg    — Frame display / full collection (featured, large)
  gallery-2.jpg    — Clinic interior
  gallery-3.jpg    — Reception desk
  gallery-4.jpg    — Examination room
  gallery-5.jpg    — Optical boutique
  gallery-6.jpg    — Clinic exterior or signage
  eyewear-1.jpg    — Corrective glasses product shot (4:3 ratio)
  eyewear-2.jpg    — Blue light glasses / sunglasses (4:3 ratio)
  eyewear-3.jpg    — Contact lenses (4:3 ratio)
  social-1.jpg     — Instagram post thumbnail 1
  social-2.jpg     — TikTok/Instagram post thumbnail 2
  social-3.jpg     — Instagram post thumbnail 3

Tip: JPG or WebP both work. Aim for under 300KB per image for fast loading.


LOGO
────
Place your logo file as logo.png in the root folder (same level as index.html).
The logo appears in the navbar and footer. A transparent-background PNG works best.


BOOKING FORM — WHATSAPP (works out of the box)
───────────────────────────────────────────────
The form already works — when a patient submits it, it opens WhatsApp with
a pre-filled message sent to +234 813 337 4478. No server needed.


BOOKING FORM — FORMSPREE (optional email notifications)
────────────────────────────────────────────────────────
If you also want to receive form submissions by email:
  1. Sign up free at https://formspree.io
  2. Create a new form and copy your Form ID (looks like: xykvyowg)
  3. Open script.js and replace 'YOUR_FORMSPREE_ID' on line 44 with your ID
  4. Example: var FORMSPREE_ID = 'xykvyowg';


LAUNCHING THE WEBSITE
─────────────────────
Option A — Free hosting with Netlify (recommended):
  1. Go to https://netlify.com and sign up free
  2. Drag the entire Eye-Ambassadors-Clinic folder onto the Netlify dashboard
  3. Your site goes live instantly with a free URL
  4. You can add a custom domain (e.g. eyeambassadors.com.ng) in settings

Option B — Any web host (cPanel/FTP):
  1. Upload ALL files and folders maintaining the same structure
  2. index.html must be in the root / public_html folder
  3. The images/ folder must be at the same level as index.html


UPDATING CONTENT
────────────────
All text content is in index.html — search for the text you want to change
and edit it directly. The site uses no framework, database, or build step.

Phone numbers appear in: index.html (booking section, footer) and script.js (WhatsApp link)
Address appears in: index.html (booking section) and the JSON-LD block at the top of the file


INSTAGRAM LINK
──────────────
In index.html, find: href="https://www.instagram.com/"
Replace with the clinic's actual Instagram URL, e.g.:
  href="https://www.instagram.com/eyeambassadors"


SUPPORT
───────
This site was built as a static HTML/CSS/JS package — no plugins, no CMS,
no dependencies to update. It will work as-is for years without maintenance.

For changes or updates, contact your web developer.
