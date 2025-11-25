# FundMate - Peer-to-Peer Loan & Crowdfunding Platform

FundMate is a modern, responsive landing page for a peer-to-peer loan and crowdfunding platform. Built with React, Tailwind CSS, and Vite for optimal performance and developer experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- **Component-Based**: Modular React components for easy maintenance and scalability
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Icon Library**: Lucide React icons for beautiful, consistent iconography

## 📁 Project Structure

```
fundmate-client/
├── public/
├── src/
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Services.jsx
│   │   │   └── CallToAction.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── pages/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Steps

1. **Navigate to the project directory**
   ```bash
   cd fundmate-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   The application will automatically open at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## 🎨 Components Overview

### Layout Components

- **Navbar**: Responsive navigation bar with mobile menu, logo, and CTA buttons
- **Footer**: Comprehensive footer with links, contact information, and social media

### Landing Page Sections

- **Hero**: Eye-catching hero section with CTAs and trust indicators
- **Stats**: Key statistics showcasing platform success
- **Features**: Grid of platform features with icons and descriptions
- **HowItWorks**: Step-by-step guide on using the platform
- **Services**: Detailed overview of P2P loans and crowdfunding services
- **CallToAction**: Conversion-focused CTA section

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize primary colors
  },
  secondary: {
    // Customize secondary colors
  }
}
```

### Typography

Font family can be changed in `tailwind.config.js` and ensure the font is imported in `index.html`.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👥 Support

For support, email support@fundmate.com or join our community Discord.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon library
- Vite for the blazing-fast build tool

---

**Built with ❤️ for the FundMate Community**
