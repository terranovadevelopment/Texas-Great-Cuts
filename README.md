# Texas Great Cuts — website preview

Static HTML/CSS/JavaScript website for Claudia Buxton's salon in Corinth, Texas. Prepared as a pre-launch preview; get Claudia's approval before making public.

## Local preview
Open `index.html` in a browser. Internet connectivity is required for the Google font and embedded Google Map; the rest of the page works offline.

## GitHub + Render
1. Create a repository such as `TerraNovaDevelopment/Texas-Great-Cuts`.
2. Upload `index.html`, `styles.css`, `script.js` and `assets/` to the repository root.
3. In Render choose **New > Static Site**, connect the repository, use **Build Command**: `echo 'No build required'` and **Publish Directory**: `.`.
4. Deploy. Render will provide a `*.onrender.com` URL. Do not point a custom domain at the site until Claudia approves it.

## Before launch
- Replace the three gallery placeholders, hero placeholder and About placeholder with Claudia's own approved photos. Put optimized images under `assets/`.
- Confirm business name/branding, address (7650 S Interstate 35 Suite 116, Corinth TX 76210), phone ((214) 694-1516), hours, services and prices with Claudia.
- The appointment button calls the salon; no online booking system is configured.
- Confirm permission for the footer developer credit, and get consent for any testimonials/photographs featuring customers.
- Verify the embedded map resolves to Suite 116 on Google Maps; if the iframe is blocked for a particular browser, the Get Directions button still works.

No customer data is collected by this static website; third-party map and font hosts may receive routine requests when a visitor loads the page.
