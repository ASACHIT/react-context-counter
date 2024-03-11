# React Context API Counter Example

This project demonstrates the usage of the Context API in React to manage global state without prop drilling. It features a simple counter application that allows users to increment and decrement a counter value.

## Table of Contents

- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Solving Prop Drilling](#solving-prop-drilling)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/asachit/react-context-counter.git
   ```
2. Install dependencies:
   ```
   cd react-context-counter-example
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## How It Works

The application uses React's Context API to manage the state of a counter. The `CounterContext` is created in `counterContext.tsx`, which provides a context value containing the current counter value and a function to update it.

The `CounterProvider` component in `counterContext.tsx` wraps the application and provides the counter context to all child components. This allows any component within the application to access and update the counter state without having to pass props down through multiple levels.

The `Button` component in `Button.tsx` uses a custom hook `useCounter` from `counterHook.tsx` to access the counter context. This hook uses the `useContext` hook to access the `CounterContext` and returns the counter value and the function to update it. The `Button` component then uses these values to increment and decrement the counter.

The `App` component in `App.tsx` wraps the application with the `CounterProvider` and renders the `Card` component, which displays the current counter value and includes two `Button` components for incrementing and decrementing the counter.

## Solving Prop Drilling

Prop drilling is a common issue in React applications where props need to be passed through multiple layers of components to reach a component that needs them. This can lead to code that is hard to maintain and understand.

By using the Context API, we can avoid prop drilling by providing a global state that any component can access without needing to pass props through intermediate components. In this project, the counter state is provided globally through the `CounterContext`, and any component can access and update this state using the `useCounter` hook.

## Project Structure

- `src/`: Contains the source code of the application.
 - `context/`: Contains the context and hook for managing the counter state.
    - `counterContext.tsx`: Defines the `CounterContext` and `CounterProvider` component.
    - `counterHook.tsx`: Defines the `useCounter` hook for accessing the counter context.
 - `component/`: Contains reusable components.
    - `Button.tsx`: A component for incrementing and decrementing the counter.
 - `App.tsx`: The main entry point of the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
