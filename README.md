# Redux Tools

A simple React application showcasing Redux Toolkit with TypeScript. This project demonstrates state management with Redux using a counter and a todo list application.


## Features

- Counter with increment, decrement, and custom amount functionality
- Todo list with add, toggle, delete, and clear all functionality
- Built with React, TypeScript, Redux Toolkit, and TailwindCSS
- Clean, minimal UI design

## Installation

### Prerequisites

- Node.js (version 16 or newer)
- npm or yarn

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/Rizon1326/Redux_Tools.git
```

2. Navigate to the project directory:
```bash
cd Redux_Tools
```

3. Install dependencies:
```bash
npm install

```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173/
```

## Project Structure

```
redux-counter-app/
├── src/
│   ├── components/
│   │   ├── Counter.tsx
│   │   └── TodoList.tsx
│   ├── features/
│   │   ├── counter/
│   │   │   └── counterSlice.ts
│   │   └── todo/
│   │       └── todoSlice.ts
│   ├── store/
│   │   └── store.ts
│   ├── App.tsx
│   └── main.tsx
├── ...
```

## Redux DevTools

This project is configured to work with the Redux DevTools extension. To use it:

1. Install the Redux DevTools extension for your browser
2. Open the application in your browser
3. Open DevTools and navigate to the Redux tab
4. Explore your Redux state and actions

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- TailwindCSS
- Vite

