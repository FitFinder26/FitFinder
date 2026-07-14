# FitFinder

This project will use **React.js** for web or **React Native** for mobile apps.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fitfinder.git
   ```

2. Install dependencies:

   ```bash
   cd fitfinder/frontend/web-app
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- [React.js](https://reactjs.org/)

## Directory Structure

```
frontend/
├── shared/                # Shared logic and utilities
│   ├── components/        # Logic-only components (no UI)
│   ├── hooks/             # Custom hooks (e.g., useAuth)
│   ├── utils/             # Validators, formatters, etc.
│   ├── services/          # API calls, auth logic
│   ├── constants/         # Routes, messages, etc.
│   └── config/            # Environment config, endpoints
├── web-app/               # Vite-based React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/    # Web-specific UI components
│   │   ├── pages/         # Login, Signup, etc.
│   │   ├── layouts/       # Layouts like Navbars
│   │   ├── styles/        # Tailwind or CSS modules
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── mobile-app/            # Placeholder for future React Native app
│   └── README.md
└── README.md
```

---
