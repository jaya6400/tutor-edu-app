# Tutor Card Stack Animation (Next.js)

A visually engaging swipe-up card stack interface built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Heroicons**.  
Each card contains interactive content and slides upward with smooth animation — creating a modern, responsive UI inspired by mobile onboarding flows.

**Deployment** on **Vercel**: https://tutor-edu-jd-app.vercel.app/ 

**Demo Video**: https://drive.google.com/file/d/1w0wSxok_wL4pm-7VJwgNpyRvPcRWrzWz/view?usp=drivesdk

---

## 🧩 Tech Stack Used

- **Next.js 16+ (App Router)** – React framework for server-side rendering and routing  
- **React 19** – Component-based UI library  
- **Tailwind CSS** – Utility-first CSS framework for styling and responsiveness  
- **Framer Motion** – Animation library for declarative, physics-based transitions  
- **Heroicons** – Elegant SVG icons integrated into cards  

---

## ⚙️ Project Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaya6400/tutor-edu-app.git
   cd tutor-edu-app
   ```
### Install dependencies
```
npm install
```
**or**
```
yarn install
```

### Run the development server
```
npm run dev
```
**or**
```
yarn dev
```

### Using Docker:
**Build image**
```
docker build -t my-tutor-edu-app .
```

**Run container**
```
docker run -p 3000:3000 my-nextjs-app
```

### Open in browser

http://localhost:3000

### 🧱 Component Structure
```
src/
├── app/
│   ├── page.tsx             # Main page rendering stacked TutorCards
│   └── globals.css          # Tailwind CSS and global styles
├── components/
│   ├── TutorCard.tsx        # Reusable card component with icon, title, and content
│   ├── GoalsCardContent.tsx # Content for first card
│   ├── ChatCardContent.tsx  # Content for second card
│   ├── VideoCardContent.tsx # Content for third card with embedded video
└── public/
    └── video.mp4            # Demo video used in the third card
```

### 🧠 Component Explanation

**TutorCard.tsx**

Displays the card layout (title, subtitle, and child content).

Styled using Tailwind classes for rounded corners, soft shadows, and responsive paddings.

Handles click interaction for transitioning between cards.

**page.tsx**

Manages card state and animation logic using Framer Motion and useState.

Handles swipe-up transitions and stacking logic.

Controls visibility of next cards in the background.

Content Components

Each card’s content (e.g., goals, chat options, video demo) is modular and passed as props into TutorCard.

### 📱 Responsiveness & 🎞️ Animations
**Responsiveness**

Implemented with Tailwind’s responsive utilities (sm:, md:, lg:).

The layout centers cards vertically and adjusts padding and text size based on viewport.

On mobile screens, each card occupies the full width with stacked visibility underneath.

**Animations**

Framer Motion drives all transitions and stacking effects:

Cards slide upward using animate={{ y: -80 }} and exit={{ y: -400 }} for a smooth reveal.

Upcoming cards are partially visible beneath the active one using opacity and scale transitions.

The motion duration (duration: 0.6) and easing (easeInOut) create a fluid swipe effect.

The stack effect gives depth with scale and offset differences for upcoming cards.

### 💡 Future Enhancements

Add drag/swipe gesture recognition for touch devices

Smooth bounce easing for more realistic transitions

Optional progress indicator or pagination dots

Support for dynamic data loading from an API

### 👩‍💻 Author

Jaya Dubey

Built with ❤️ using Next.js, Tailwind CSS, Framer Motion, and Heroicons.
