import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const {counter, counterElement, handleClick} = useCounter();

    return (
        <>
            <h1>CounterHook:</h1>
            <h1 ref={ counterElement } className="mi-objeto"> { counter }</h1>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
