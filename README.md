# 🚀 My Assignment – UI Component Library & Demo

A pixel-perfect **React + TypeScript** project built with **Vite**, styled using **TailwindCSS**, documented in **Storybook**, and deployed to **Vercel** & **Chromatic**.  
This project demonstrates reusable components (forms, tables, pagination, etc.) with professional theming and testing support.

## ✨ Features
- ⚡ **Vite + React 18 + TypeScript** – modern fast development setup
- 🎨 **TailwindCSS** – utility-first styling with dark/light theme support
- 📖 **Storybook 9** – interactive component explorer
- 🌐 **Chromatic** – hosted Storybook for collaboration
- ☁️ **Vercel Deployment** – production-ready frontend hosting
- ✅ **Vitest + Playwright** – testing setup with jsdom & browser support
- ♻️ **Reusable Components** – form inputs, data tables, pagination, etc.

## 📦 Installation
Clone the repo and install dependencies:
bash
<pre>
git clone https://github.com/YOUR-USERNAME/my-assignment.git
cd my-assignment
npm install </pre>

🛠️ Development
Start the local dev server:
<pre>npm run dev </pre>
Storybook for components:
<pre>npm run storybook </pre>
Run tests:
<pre>npm run test </pre>

🚀 Deployment
🔹 Vercel (Live App)
The Vite app is deployed on Vercel.
👉 View Live Demo (https://my-assignment-ivory.vercel.app/)

🔹 Chromatic (Storybook Hosting)
Storybook is published on Chromatic.
👉 View Storybook (https://68a0cc44898593162ef823bd-aimbzkjnko.chromatic.com/?path=/docs/configure-your-project--docs)

📂 Project Structure
<pre>
  assignment/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── forms/        # Form components (TextInput, etc.)
│   │   ├── data-display/ # DataTable, Pagination, SearchBar
│   │   └── theme/        # Theme toggle, dark mode
│   ├── App.tsx           # Demo page
│   └── index.css         # Tailwind styles
├── .storybook/           # Storybook config
├── public/               # Static assets
├── package.json
├── vite.config.ts
└── README.md
</pre>

🧪 Testing
Run unit and browser tests with Vitest:
<pre>npm run test
npm run test:storybook</pre>

🤝 Contributing
Pull requests are welcome!
If you’d like to improve the design, add components, or enhance tests, feel free to open an issue or PR.
