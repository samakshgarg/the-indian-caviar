THE INDIAN CAVIAR — Next.js + Tailwind (Vercel-ready)

Quick start:
1) Install Node.js 18+
2) In terminal:
   cd the-indian-caviar
   npm install
   npm run dev   # local preview (http://localhost:3000)
   npm run build && npm start  # local production

Deploy to Vercel:
1) Go to vercel.com → New Project → Import → Upload this folder
2) After deploy, add the domain theindiancaviar.com in Settings → Domains
3) Follow Vercel's DNS instructions:
   - CNAME for www → cname.vercel-dns.com
   - A records for apex if suggested
4) Wait a few minutes → SSL auto-activates.

Customize:
- Edit data/products.js for names, prices, and images.
- In components/Contact.js, replace the Formspree action URL with your endpoint to receive emails.
- Update OG image in pages/_document.js when you host your own preview image.
- WhatsApp ordering already points to +91 9266735566.
