# Mariam Amro Ahmed Fathi Seifeldin | AI & Data Science Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel)](https://ai-portfolio-jet-two.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-2-EE4C2C?style=for-the-badge&logo=pytorch)](https://pytorch.org/)

A modern, single-page portfolio website showcasing my work as a **Machine Learning Engineer & Data Scientist**. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Portfolio Preview](./public/ai-preview.png)

## ✨ Features

### 🎯 Focused Content

- **AI & Data Science** emphasis with Python, PyTorch, and Machine Learning
- **3 featured projects** including AI Vision Classifier, Soft Computing Library, and Gomoku AI
- **Certifications section** with DEPI, NVIDIA, and Huawei credentials
- **Comprehensive skills** across AI, data science, and development

### 🧭 Navigation

- Smooth scrolling between sections
- Responsive navbar with mobile hamburger menu
- Active section highlighting
- Dark/light mode toggle

### 📱 Sections

- **Hero** - Animated typing effect with AI/ML role descriptions
- **About** - Personal bio with contact links and resume
- **Education** - Academic background and coursework
- **Experience** - Professional internships and contributions
- **Projects** - Featured AI/ML applications
- **Skills** - Categorized technical proficiencies
- **Certifications** - Professional certifications and courses
- **Contact** - Social links and contact information

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

## 🤖 Featured AI Projects

### AI-Vision-Classifier-System

An end-to-end waste classification system using deep learning and computer vision.

- **Tech**: PyTorch, ResNet50, OpenCV, Scikit-learn
- **Achievement**: Boosted accuracy from 60% to 90% using transfer learning
- **Features**: Real-time camera inference, data augmentation, model optimization

### Soft Computing Library

A modular Java-based library implementing genetic algorithms, fuzzy logic, and neural networks.

- **Tech**: Java, Genetic Algorithms, Fuzzy Logic, Neural Networks
- **Features**: Pluggable modules, hyperparameter tuning, real-world validation

### Gomoku AI Game

An intelligent game implementation with Minimax and Alpha-Beta Pruning.

- **Tech**: Python, Tkinter, Search Algorithms
- **Features**: Human vs AI and AI vs AI modes, heuristic evaluation

## 📜 Certifications

- **AI & Data Science** - Digital Egypt Pioneers Initiative (DEPI)
- **Deep Learning Fundamentals** - NVIDIA Deep Learning Institute
- **Transformer-Based NLP** - NVIDIA Deep Learning Institute
- **Cloud Computing Essentials** - Huawei Cloud

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                    # Main portfolio page
│   ├── layout.tsx                   # Root layout with metadata
│   ├── providers.tsx                 # Theme provider
│   └── globals.css                    # Global styles
├── components/
│   ├── sections/                      # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── ui/                             # Reusable components
│       ├── Navbar.tsx
│       ├── ThemeToggle.tsx
│       ├── ProjectCard.tsx
│       ├── CertificationCard.tsx
│       └── ...
├── lib/
│   ├── data.ts                         # AI content
│   └── types.ts                         # TypeScript interfaces
└── public/
    ├── profile1.jpeg
    ├── ai/
    │   ├── classifier.jpeg
    │   ├── genetic-alg.jpg
    │   └── gomoku.jpeg
    └── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Mariam-Amro-2005/AI-Portfolio.git
cd ai-portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Color Scheme

- **Primary**: Purple/Blue gradient
- **Accent**: Violet tones for highlights
- **Dark mode**: Optimized dark theme with adjusted contrasts

## 📱 Responsive Design

- **Desktop**: Full experience with all sections visible
- **Tablet**: Adjusted layouts for medium screens
- **Mobile**: Collapsible navbar and optimized spacing

## 🌙 Dark Mode

Supports system preference and manual toggle with persistent storage. All components are styled for both light and dark themes.

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

[View Live Site](https://ai-portfolio-jet-two.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE.txt).

## 👩‍💻 Author

### Mariam Seifeldin

- LinkedIn: [mariam-seifeldin](https://www.linkedin.com/in/mariam-seifeldin/)
- GitHub: [@Mariam-Amro-2005](https://github.com/Mariam-Amro-2005)
- Email: [mariam.seifeldin.2005@gmail.com](mariam.seifeldin.2005@gmail.com)

## 🙏 Acknowledgments

- Icons by [Icons8](https://icons8.com/)
- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com/)
