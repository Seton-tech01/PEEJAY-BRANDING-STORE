# 👕 Peejay Store — Premium Apparel Branding Platform

Peejay Store is a high-end, conversion-focused landing page and digital showroom built for modern creators, streetwear startups, and corporate teams looking for premium custom apparel branding. 

The application offers a cinematic, fluid user experience optimized for client acquisition, highlighting design profiles, detailing production workflows, and routing design briefs through an automated dual-channel fulfillment architecture (Email + WhatsApp).

---

## 🚀 Key Features

* **Cinematic, Fluid UI:** Crafted with a luxury visual aesthetic featuring dynamic gradient text overlays, interactive multi-axis hover rotations for product cards, and smooth section transitions.
* **Fully Responsive Architecture:** Uses a fluid layout breakpoint map featuring a robust Alpine.js-powered mobile navigation drawer.
* **Dual-Channel Order Engine:** Custom asynchronous form-handling mechanism designed to capture high-value leads:
    * **Primary Database Route:** Securely posts form payloads to a background API email aggregator via asynchronous `fetch()`.
    * **Direct Delivery Route:** Autogenerates an explicit, beautifully formatted, markdown-compatible fallback link that maps inputs directly into the company's WhatsApp workspace.
* **Optimized Performance:** Blazing fast load times with utility-first layouts, un-nested DOM depth, and zero heavy monolithic dependencies.

---

## 🛠️ Tech Stack & Dependencies

* **Core Structure:** HTML5 (Semantic Structure & Accessible Form Interfaces)
* **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (Using modern utility structures and fluid native color engines)
* **Interactions:** [Alpine.js v3.x](https://alpinejs.dev/) (Lightweight reactive layout toggles)
* **Typography:** Plus Jakarta Sans via Google Fonts API
* **Asset Providers:** Dynamic imagery sourced via Unsplash optimization links

---

## 🌐 Live Demo

Visit the live portfolio:

[Peejay Store Website](https://peejay-store.netlify.app/)

---

## 🔌 Dual-Channel Form Architecture

The form submission workflow uses a distinct structural pattern designed to guarantee lead capturing even if external email engines experience downtime:


```

```
              [ User Submits Form ]
                       │
             🛡️ event.preventDefault()
                       │
          ┌────────────┴────────────┐
          ▼                         ▼

```

[ Route 1: Formspree API ]  [ Route 2: WhatsApp URI ]
│                         │
Asynchronous fetch()        String Compiling & URL Encoding
│                         │
▼                         ▼
Logs Email Record        Auto-opens Target Interface

```

### Script Configurations
If you are deploying this project for production, update the configuration constants within the script block:

```javascript
// --- CONFIGURATION ZONE ---
const whatsappNumber = "2348114054457"; // Target business line (Include country code)
const formspreeEndpoint = "[https://formspree.io/f/mjgzlwnw](https://formspree.io/f/mjgzlwnw)"; // Backend Email Key
// --------------------------

```

---

## 💻 Local Development & Quickstart

Because the project leverages modern CDNs for the compilation of Tailwind CSS v4 and Alpine.js, there is no tedious configuration process.

1. **Clone the Repository:**
```bash
git clone [https://github.com/your-username/peejay-store.git](https://github.com/your-username/peejay-store.git)
cd peejay-store

```


2. **Launch the File:**
Simply open the `index.html` file in any modern web browser or use a standard IDE live server utility.
```bash
# If using live-server globally
live-server

```



---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
