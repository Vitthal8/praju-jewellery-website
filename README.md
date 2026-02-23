# ✦ Handcrafted Jewellery by Praju — Website

A modern, Instagram-aesthetic D2C jewellery website. Fully static — no server required. Host for **free** in minutes.

---

## 📁 File Structure

```
praju-jewellery/
├── index.html              ← Main website (single page)
├── css/
│   └── style.css           ← All styles
├── js/
│   └── app.js              ← Products, cart, animations, WhatsApp
├── images/                 ← Add your product photos here
│   └── (your images)
├── netlify.toml            ← Netlify config
├── vercel.json             ← Vercel config
├── _redirects              ← Netlify redirects
├── robots.txt              ← SEO
├── sitemap.xml             ← SEO
└── .github/
    └── workflows/
        └── deploy.yml      ← GitHub Pages auto-deploy
```

---

## 🚀 Free Hosting Options (Choose ONE)

### Option 1 — Netlify (RECOMMENDED ⭐ Easiest, Fastest)

**Step 1:** Go to [netlify.com](https://netlify.com) and sign up free  
**Step 2:** Drag and drop the entire `praju-jewellery/` folder onto the Netlify dashboard  
**Step 3:** Your site is LIVE instantly at `https://random-name.netlify.app`  
**Step 4 (Optional):** Add a custom domain in Site Settings → Domain Management

That's it! 🎉

> **Auto-deploy via Git:**  
> Connect your GitHub repo → every `git push` auto-deploys. Zero effort.

---

### Option 2 — Vercel (Fast CDN, Great Performance)

**Step 1:** Go to [vercel.com](https://vercel.com) → Sign up with GitHub  
**Step 2:** Click "New Project" → Import your GitHub repository  
**Step 3:** Framework: **Other** | Root Directory: `/` | No build command needed  
**Step 4:** Click Deploy → Live at `https://praju-jewellery.vercel.app`

> Vercel gives you **free SSL, CDN, analytics** automatically.

---

### Option 3 — GitHub Pages (Free forever, great for beginners)

**Step 1:** Create a free GitHub account at [github.com](https://github.com)  
**Step 2:** Create a new repository named `praju-jewellery`  
**Step 3:** Upload all files from this folder to the repository  
**Step 4:** Go to Repository → Settings → Pages  
**Step 5:** Source: **GitHub Actions** (the `deploy.yml` file handles this automatically)  
**Step 6:** Every push to `main` branch auto-deploys your site  

Live at: `https://YOUR-USERNAME.github.io/praju-jewellery`

---

## ✏️ Customisation Checklist

### 🔴 Must Change Before Launch

1. **WhatsApp Number** — Search and replace `919999999999` with your actual number  
   (format: country code + number, no + or spaces)
   - In `index.html` — all `href="https://wa.me/..."` links
   - In `js/app.js` — WhatsApp checkout and form submission links

2. **Instagram Handle** — Replace `praju.jewellery` with your actual Instagram username  
   - In `index.html` — all Instagram links and @mentions

3. **Your Location** — Update `Pune, Maharashtra, India` to your actual city

4. **Business Hours** — Update the hours in the Contact section

### 🟡 Recommended Changes

5. **Product Data** (`js/app.js` → `PRODUCTS` array)  
   - Update product names, prices, and descriptions  
   - Replace emoji with actual product photos (see Image Guide below)

6. **Reviews** (`js/app.js` → `REVIEWS` array)  
   - Add real customer testimonials

7. **Domain** (`robots.txt`, `sitemap.xml`)  
   - Replace `YOUR-DOMAIN.com` with your actual domain

### 🟢 Optional

8. **Google Analytics** — Add your GA4 tracking ID inside `<head>` in `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

9. **Razorpay Payment Button** — Add a Razorpay payment link/button to replace WhatsApp checkout once you're ready.

---

## 🖼️ Adding Real Product Images

1. Add your `.jpg` or `.webp` images to the `/images/` folder
2. In `js/app.js`, update each product's entry:

   ```javascript
   // BEFORE (emoji placeholder)
   { id: 1, name: 'Pearl Cascade Earrings', emoji: '🤍', ... }

   // AFTER (real image)
   { id: 1, name: 'Pearl Cascade Earrings', img: 'images/pearl-earrings.jpg', ... }
   ```

3. In `index.html` product card template (inside `renderProducts` in app.js), change:
   ```javascript
   // Replace this line:
   <div class="product-card__img-placeholder">${p.emoji}</div>
   // With:
   <img class="product-card__img" src="${p.img}" alt="${p.name}" loading="lazy" />
   ```

> **Image Tips:**  
> - Use square images (1:1 ratio) — at least 600×600px  
> - Compress to under 200KB using [squoosh.app](https://squoosh.app) (free)  
> - Name files clearly: `gold-hoop-earrings.jpg` not `IMG_4521.jpg`

---

## 📱 Features Included

- ✅ Instagram-style product feed with filters
- ✅ Shopping cart (saved in browser, persists on refresh)
- ✅ WhatsApp checkout (cart items auto-formatted as a message)
- ✅ Custom order form → sends to WhatsApp
- ✅ Wishlist (saved in browser)
- ✅ Product search
- ✅ Customer reviews carousel
- ✅ Animated number counters
- ✅ Scroll reveal animations
- ✅ Custom cursor (desktop)
- ✅ Mobile responsive
- ✅ Share product via Web Share API
- ✅ Floating WhatsApp button
- ✅ Instagram grid section
- ✅ Loader screen
- ✅ Toast notifications
- ✅ SEO meta tags
- ✅ Security headers
- ✅ Devanagari (Marathi) text support

---

## 🔄 Updating the Website

After deployment, to update your site:

**Netlify (drag & drop):** Re-drag the updated folder to Netlify  
**Netlify/Vercel (Git):** `git add . && git commit -m "update" && git push`  
**GitHub Pages:** Push to `main` branch → auto-deploys in ~2 minutes

---

## 🆓 Free Tier Limits

| Platform | Bandwidth | Storage | Custom Domain | SSL |
|----------|-----------|---------|---------------|-----|
| Netlify | 100 GB/mo | 1 GB | ✅ Free | ✅ Auto |
| Vercel | 100 GB/mo | 1 GB | ✅ Free | ✅ Auto |
| GitHub Pages | 100 GB/mo | 1 GB | ✅ Free | ✅ Auto |

All three are **more than enough** for a growing jewellery brand. No credit card required.

---

## 💛 Built with love for Handcrafted Jewellery by Praju

हस्तनिर्मित दागिने, प्रेमाने घडवलेले.  
*Handcrafted jewellery, made with love.*
