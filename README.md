# DEVRADAR 🔍 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub API](https://img.shields.io/badge/github%20api-%23121011.svg?style=flat&logo=github&logoColor=white)](https://docs.github.com/en/rest)
[![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=flat&logo=prettier&logoColor=F7BA3E)](https://prettier.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## ✨ Description
A sophisticated GitHub talent acquisition platform built with modern web technologies. Streamline your technical recruitment process by discovering, evaluating, and managing potential developer candidates through GitHub profiles. 🚀

## 📑 Table of Contents
- [✨ Features](#-features)
- [🚀 Deployment](#-deployment)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [🏗️ Project Structure](#️-project-structure)
- [🔐 Environment Setup](#-environment-setup)
- [💻 Development](#-development)
- [🔌 API Integration](#-api-integration)
- [🎨 UI/UX Features](#-uiux-features)
- [📈 Performance](#-performance)
- [👥 Contributing](#-contributing)
- [📄 License](#-license)
- [📫 Contact](#-contact)
### Search Portal
![App Screenshot](https://i.imgur.com/4B0eYhS.png)

### Saved candidates
![App Screenshot](https://i.imgur.com/SF6K8EZ.png)

### No candidates Found
![App Screenshot](https://i.imgur.com/L2AhG3U.png)

## ✨ Features

### Core Features 🎯
- 🔍 Advanced GitHub user search with real-time filtering
- 👤 Comprehensive user profile analysis
- 💾 Local storage persistence for saved candidates
- 📊 Developer statistics visualization
- 🌐 Direct links to GitHub profiles and repositories

### Technical Features 🛠️
- ⚡ Optimized performance with React 18 features
- 📱 Responsive design with Tailwind CSS
- 🔒 Secure token handling and API integration
- 🎭 Error boundary implementation
- 🔄 Custom hooks for data management
- 🌐 React Router v6 navigation

## 🚀 Deployment

This portfolio is live on Render at: [https://devradar-pe79.onrender.com] 🌐

## 🛠️ Tech Stack

### Frontend Core 🎨
- **Framework:** React 18.2.0
- **Language:** TypeScript 5.2.2
- **Routing:** React Router DOM 6.23.1
- **Styling:** Tailwind CSS 3.4.1
- **Build Tool:** Vite 5.2.0

### Development Tools 🔧
- **Type Checking:** TypeScript
- **Linting:** ESLint with TypeScript plugins
- **Code Formatting:** Prettier
- **Icon Library:** Lucide React
- **Version Control:** Git
- **API Testing:** Postman

### Performance Optimization 🚀
- Code splitting with React.lazy()
- Memoization with useMemo and useCallback
- Image optimization
- Bundle size optimization

## 📦 Installation

### Prerequisites 📋
- Node.js 18.x or higher
- npm 8.x or higher
- Git
- GitHub account and personal access token

### Step-by-Step Setup 🔄

1. Clone the repository
```bash
git clone https://github.com/yourusername/DEVRadar.git
cd DEVRadar
```

2. Install dependencies
```bash
npm install
```

3. Configure environment
```bash
cp .env.example .env
```


4. Start development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## 🏗️ Project Structure

```plaintext
DEVRADAR/
├── public/                    # Public assets
│   └── vite.svg
├── src/                      # Source files
│   ├── api/                  # API integration
│   │   └── API.tsx          # GitHub API services
│   ├── assets/              # Asset files
│   │   └── react.svg        
│   ├── components/          # Reusable components
│   │   └── Nav.tsx         # Navigation component
│   ├── interfaces/          # TypeScript interfaces
│   │   └── Candidate.interface.tsx
│   ├── pages/              # Page components
│   │   ├── CandidateSearch.tsx
│   │   ├── ErrorPage.tsx
│   │   └── SavedCandidates.tsx
│   ├── App.tsx             # Main App component
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── .env.EXAMPLE            # Example environment variables
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Git ignore file
├── LICENSE                 # License file
├── README.md               # Project documentation
├── index.html             # HTML entry point
├── package-lock.json      # Package lock file
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # Node TypeScript configuration
├── vite.config.ts         # Vite configuration
└── tailwind.config.cjs    # Tailwind Configuration
```

## 🔐 Environment Setup

### Required Environment Variables 🔑
```env
# GitHub API Configuration
# Generate a token at https://github.com/settings/tokens
VITE_GITHUB_TOKEN=your_github_token_here

# API Configuration
VITE_GITHUB_API_URL=https://api.github.com/YOUR_API_URL
# Application Configuration
VITE_DEV_SERVER_PORT=3000

# Never commit your actual .env file
# Copy this file to .env and fill in your values
```

### GitHub Token Scopes 🎫
Required scopes for full functionality:
- `read:user`
- `user:email`
- `read:org` (optional)

## 💻 Development

### Available Scripts 📜
```bash
# Development
npm run dev           # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Quality Assurance
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Code Quality Tools 🛠️
- ESLint configuration for React and TypeScript
- Prettier for consistent code formatting
- TypeScript strict mode enabled


## 🔌 API Integration

### GitHub API Endpoints 🔗
```typescript
// Available endpoints
GET /users                 # List GitHub users
GET /users/{username}      # Get user details
GET /users/{username}/repos # Get user repositories
```

### Rate Limiting 📊
- Authentication: 5,000 requests per hour
- Unauthenticated: 60 requests per hour
- Rate limit header handling

## 🎨 UI/UX Features

### Components 🧩
- 🎯 Interactive data tables
- 🎨 Custom loading skeletons
- 🎭 Error boundaries
- 📱 Responsive navigation
- 🎨 Glass morphism effects

### Animations 🎬
- Page transitions
- Loading states
- Hover effects

## 📈 Performance

### Optimizations 🚀
- React.lazy() for code splitting
- useCallback for memoized functions
- useMemo for expensive calculations
- Debounced search inputs
- Optimized rerenders

### Metrics 📊
- Lighthouse score: 95+
- First contentful paint: < 1s
- Time to interactive: < 2s
- Bundle size: < 200KB gzipped

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌱 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💫 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔍 Open a Pull Request

### Development Process 🔄
1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/amazing-feature
```
3. Commit changes
```bash
git commit -m 'feat: add amazing feature'
```
4. Push to the branch
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

Let's connect! Reach out to me through:

- 🌐 **Portfolio**: www.waleedzaryab.com
- 🐱 **GitHub**: https://github.com/GhostMods00
- 📧 **Email**: westendcrew1982@gmail.com

---

Made with ❤️ by Waleed Zaryab | © 2024 All Rights Reserved ✨
