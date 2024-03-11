import './App.css'
import Button from './component/Button'
import { CounterProvider } from './context/counterContext'
import { useCounter } from './context/counterHook'


function Card() {
  const { counter } = useCounter() // useCounter is a custom hook that provides access to the CounterContext
  return (<>
    <h1>
      {counter}
    </h1>
    <div className="card">
      <Button />
      <Button />
      <Button />
    </div>
  </>
  )
}

function App() {

  return (
    <CounterProvider>
      <Card />
    </CounterProvider>
  )
}

export default App


