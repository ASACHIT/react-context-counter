import { useContext } from "react";
import { CounterContext } from "./counterContext";

/**
 * Custom hook that provides access to the CounterContext.
 * Throws an error if used outside of a CounterProvider.
 * @returns The CounterContext value
 * @example
 * ```tsx
 * const { counter, setCounter } = useCounter();
 * ```
 */
export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
}