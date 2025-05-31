# 🤖 AI Chat App

A sleek React Native-powered AI chat interface with a smooth WhatsApp-style UI. Designed for clean, maintainable frontend architecture with reusable components and vector icon support.

## 🖼️ UI Preview

> <img src="https://github.com/meKushdeepSingh/react-native-ai-chat-app/blob/main/src/assets/screenshots/AI-app-ui-screenshot.png" alt="A preview of the application" width="150" height="320">

## 🗂️ Project Structure

```
src
├── @types
│   └── svg/svg.d.ts           # TypeScript declarations for SVGs
├── assets
│   └── icons/                 # Vector icons (e.g., IcBack.svg, IcSend.svg)
├── common
│   └── components/
│       ├── button/            # Reusable button component
│       └── header/            # Chat header with back icon
├── Modules/
│   └── Chat/
│       ├── components/        # MessageBubble, InputBar, etc.
│       ├── styles/            # UI styling for chat components
│       └── ChatScreen.tsx     # Main chat screen
├── services/
│   └── chat/                  # Service and hooks for chat logic
├── theme/
│   └── colors.ts, fonts.ts    # Central theme management
├── types/
│   └── chat.ts                # Type definitions for chat module
└── index.ts                   # App entry point
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/meKushdeepSingh/react-native-ai-chat-app.git
cd react-native-ai-chat-app
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the Metro bundler

```bash
yarn start
```

### 4. Launch the app

```bash
yarn android  # For Android
yarn ios      # For iOS
```

## 🔧 Tech Stack

- React Native (TypeScript)
- React Hooks
- SVG support via `react-native-svg` & `react-native-svg-transformer`
- Modular file architecture

## 📸 Assets

- `assets/screenshots/AI-app-ui-screenshot.png` — UI Screenshot of the chat interface

## 🧩 Notes

If you face issues with SVG imports like `Unable to resolve module @/assets/icons/IcBack.svg`, ensure:

- The `metro.config.js` is correctly configured with `react-native-svg-transformer`
- Your `tsconfig.json` has correct `baseUrl` and `paths`
- You declared SVG modules in `@types/svg/svg.d.ts`

## 🔗 Repository

[👉 View on GitHub](https://github.com/meKushdeepSingh/react-native-ai-chat-app)

## 🚀 Coming Soon

- Integration with OpenAI
- Intelligent response generation
- Local and remote state management

---

Built with ❤️ by Kushdeep Singh
