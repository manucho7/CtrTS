import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const MAXIMUM_COUNT = 10;

export const useCounter = () => {

    const [counter, setCounter] = useState(5);
    
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUM_COUNT ));
    }

    useEffect(() => {

        if(counter < 10) return;

        console.log('%cSe llego al valor maximo','color: red, background-color: black')
        
        const timeline = gsap.timeline();

        timeline.to(counterElement.current, { y: -700, duration: 0.2, ease: 'ease.out'})
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

        timeline.repeat(7)


    }, [counter]);

    return {
        counter,
        handleClick,
        counterElement
    };

};