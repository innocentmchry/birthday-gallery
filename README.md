# 🎂 Birthday Gallery Website

A beautiful, interactive birthday photo gallery — just like the Christmas card site but with balloons, confetti, and birthday music!

---

## ✨ Features

- **Infinite horizontal scroll** — the gallery loops endlessly, auto-scrolling gently
- **Click any photo** to open it full-screen with a personalized birthday message written out letter by letter (typewriter effect)
- **Confetti burst** every time you open a photo
- **"Happy Birthday" music** generated in real time — no audio files needed
- **Floating balloons & twinkling stars** in the background
- Smooth animations, mobile-friendly drag & touch support

---

## 🚀 Quick Start

1. **Add your photos** — copy your images into the `/images/` folder and name them exactly:
   ```
   images/photo1.jpg
   images/photo2.jpg
   images/photo3.jpg
   ...
   images/photo10.jpg
   ```
   Photos can be `.jpg`, `.jpeg`, `.png`, or `.webp` — just update the filename extension in `js/main.js` if not `.jpg`.

2. **Set the birthday person's name** — open `js/main.js` and change line 1:
   ```js
   const BIRTHDAY_NAME = 'You';   // ← change to e.g. 'Sarah'
   ```

3. **Open `index.html`** in any modern browser. No server needed!

---

## ✏️ Customization

### Change messages
In `js/main.js`, find the `MESSAGES` array (one message per photo). Edit any message freely — they support emoji too!

### Add more photos
1. Set `PHOTO_COUNT` in `js/main.js` to the new total (e.g. `15`)
2. Add the matching image files to `images/` (`photo11.jpg` … `photo15.jpg`)
3. Add the same number of extra messages to the `MESSAGES` array

### Change the name in messages
All messages use the `BIRTHDAY_NAME` variable automatically via template literals, so updating the variable at the top is enough.

---

## 📁 File Structure

```
birthday/
├── index.html        ← Main page
├── css/
│   └── style.css     ← All styles & animations
├── js/
│   └── main.js       ← Gallery, confetti, audio, modal
├── images/
│   ├── photo1.jpg    ← Add your photos here
│   ├── photo2.jpg
│   └── ...
└── README.md         ← This file
```

---

## 🌐 Hosting

To share this online, you can upload the entire folder to any static hosting service:
- **GitHub Pages** — free, great for personal projects
- **Netlify** — drag and drop the folder
- **Vercel** — `vercel deploy`

---

Made with 💝 — Happy Birthday!
# birthday-gallery
