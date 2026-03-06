# 🏨 Starlux: Elite Luxury Hotel Booking Platform

A high-performance, premium **Hotel Reservation & Management System** built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Featuring a sophisticated "Elite Luxury" UI, multi-tier user dashboards, and a production-hardened booking engine.

---

## 📸 Project Preview
![Starlux Preview](main.png)
*(Note: Replace with a full dashboard screenshot before final launch)*

---

## 🚀 Project Overview

**Starlux** is more than just a booking site; it's a comprehensive hospitality ecosystem. Designed for the high-end travel market, it provides a seamless bridge between travelers, property owners, and system administrators.

The platform is divided into three distinct operational layers:

- **Travelers (Guests)**: Can discover hand-picked luxury hotels, manage complex itineraries, and track reward points through a personalized dashboard.
- **Proprietors (Owners)**: Have access to a powerful analytics suite to monitor revenue, manage room inventory, and handle real-time bookings.
- **System Administrators**: A "Super-Admin" layer for platform-wide oversight, property verification, and financial auditing.

Powered by **Next.js App Router**, the application utilizes **Server-Side Rendering (SSR)** for SEO excellence and **Hydration Shields** to ensure a flicker-free, robust user experience across all modern browsers.

---

## 📅 Development Blueprint

| Phase | Focus Area | Outcome |
|-------|-----------|---------|
| 1 | Architecture | Scalable folder structure using Next.js App Router and Atomic Design components |
| 2 | Design System | Elite "Glassmorphism" UI with consistent spacing, typography (Outfit/Inter), and shadows |
| 3 | Core Flow | End-to-end booking cycle: Discovery → Details → Payment → Confirmation |
| 4 | Dashboard Engine | Complex state management for User, Owner, and Admin dashboard layers |
| 5 | Data Hardening | Role-based routing and hydration-safe rendering for dynamic reservation IDs |
| 6 | UX Excellence | Precision scroll interactions, responsive mobile layouts, and custom-generated high-res assets |

---

## 🗂️ Project Structure

```
starlux/
├── src/
│   ├── app/                      # Next.js App Router (Routes & Layouts)
│   │   ├── admin/                # System Administration Dashboard
│   │   ├── owner/                # Property Owner Dashboard
│   │   ├── dashboard/            # Guest Personal Dashboard
│   │   ├── hotels/               # Hotel Discovery & Listing engine
│   │   ├── booking/              # Reservation flow
│   │   └── ...
│   ├── components/               # UI & Layout Architecture
│   │   ├── hotel/                # Specific listing & card components
│   │   ├── layout/               # Shared Navbars & Base Layouts
│   │   └── ui/                   # Atomic components (Buttons, Cards, Inputs)
│   ├── lib/                      # Shared utilities & configurations
├── public/                       # Static assets & Luxury imagery
├── tailwind.config.ts            # Custom "Elite" theme configuration
├── package.json                  # Dependencies & Core scripts
└── README.md                     # (This file)
```

---

## 🛠️ Technology Stack

### Frontend & Core
- **Next.js 16** — The foundation for elite performance and SEO.
- **React 19** — Utilizing the latest hooks and concurrent features.
- **TypeScript** — Strict type-safety across the entire component library.
- **Tailwind CSS 4** — Next-gen utility styling for bespoke luxury designs.
- **Lucide React** — Minimalist, high-quality iconography.
- **CSS Variable Tokens** — Centralized design system for easy theme pivoting.

---

## 🔍 Key Features

### 💎 Elite "Starlux" UI
- **Glassmorphism Effects**: Subtle background blurs and border glows for a premium feel.
- **Micro-Animations**: Smooth scale transitions on buttons and hover-aware card layouts.
- **Responsive Mastery**: Fluid layouts that maintain elegance from mobile devices to 4K displays.

### 📊 Triple-Tier Dashboard System
- **Proprietor Overview**: Real-time revenue charts, booking stats, and property performance metrics.
- **Guest Hub**: A centralized location for upcoming trips, wishlists, and loyalty tier status.
- **Admin Control**: Forensic oversight of the platform's listings and user base.

### 🛡️ Technical Hardening
- **Hydration Resilience**: Custom implementations to prevent server/client mismatches in dynamic dates and IDs.
- **SEO Optimization**: Organized metadata structures for high visibility in travel search rankings.
- **Asset Management**: Optimized local image serving with clean directory structures.

---

## ✅ Local Development

### Prerequisites
- **Node.js** v20+

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/moh-alfarjani/starlux-hotel-booking.git
   cd starlux
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Production Build

```bash
npm run build   # Optimizes for production
npm run start   # Starts the production server
```

---

## 🌐 Developer & Contact
- Project Link: [github.com/moh-alfarjani/starlux-hotel-booking](https://github.com/moh-alfarjani/starlux-hotel-booking)
- Developer: **Mohammad Alfarjani**

---

💬 **Closing Note**

Starlux is a testament to what happens when high-end design meets modern engineering. Every route, from the search listing to the payment confirmation, was audited for performance and visual perfection.

---
