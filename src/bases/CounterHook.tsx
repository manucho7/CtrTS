import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const {counter, elementToAnimate, handleClick} = useCounter({maxCount: 15});

    return (
        <>
            <h1>CounterHook:</h1>
            <h1 ref={ elementToAnimate } className="mi-objeto"> { counter }</h1>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
