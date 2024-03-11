import { ReactNode, createContext, useState } from "react";
import React from "react";


interface counterContext {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * CounterContext is a context object that provides a counterContext value.
 * It is used to share the state and functionality related to the counter between components.
 */
export const CounterContext = createContext<counterContext | undefined>(undefined);


/**
 * CounterProvider component provides a context for managing a counter state.
 *
 * @component
 * @example
 * ```tsx
 * <CounterProvider>
 *   <App />
 * </CounterProvider>
 * ```
 *
 * @param {ReactNode} children - The child components to be wrapped by the CounterProvider.
 * @returns {ReactNode} The wrapped child components with the CounterProvider context.
 */
export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [counter, setCounter] = useState(0);
    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}