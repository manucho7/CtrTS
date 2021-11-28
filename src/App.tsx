import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <>
        <Counter initialValue={7}/>
        <hr />
        <CounterBy />
        <hr />
        <CounterEffect />
        <CounterHook />
    </>
  );
}

export default App;
