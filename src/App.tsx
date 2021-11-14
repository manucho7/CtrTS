import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from './bases/CounterEffect'

function App() {
  return (
    <>
        <Counter initialValue={7}/>
        <hr />
        <CounterBy />
        <hr />
        <CounterEffect />
    </>
  );
}

export default App;
