# Redux Basics with React

This README provides a beginner-friendly introduction to **Redux**, how it works, and how to use it in a React project using **Redux Toolkit**.

---

## 🧠 What is Redux?

**Redux** is a predictable state management library for JavaScript apps. It helps you manage the state of your application in a centralized place and ensures that the state behaves consistently.

### Key Concepts:

1. **Store**: The single source of truth. Holds the entire application state.
2. **Actions**: Plain JavaScript objects that describe what happened.
3. **Reducers**: Pure functions that determine how the state changes based on actions.
4. **Dispatch**: A method to send actions to the store.
5. **Selector**: A way to read data from the state.

---

## 📦 Why Use Redux?

- Centralized state management
- Predictable state updates
- Easy debugging with Redux DevTools
- Makes complex state logic easier to manage

---

## 🧱 Redux Toolkit

Redux Toolkit is the official, recommended way to write Redux logic. It simplifies configuration and reduces boilerplate.

### Advantages:
- Built-in `createSlice`, `configureStore`
- Immutability with Immer
- DevTools integration

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux
