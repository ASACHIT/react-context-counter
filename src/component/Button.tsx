import { useCounter } from '../context/counterHook'

function Button() {
    const { counter, setCounter } = useCounter(); // useCounter is a custom hook that provides access to the CounterContext
    return (
        <>
            <button onClick={() => { setCounter(counter + 1) }}>
                Increment
            </button>
            <button onClick={() => { setCounter(counter > 0 ? counter - 1 : counter) }}>
                Decrement
            </button>
        </>
    )
}

export default Button