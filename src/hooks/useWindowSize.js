import { useState, useEffect } from 'react';

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        // helps prevent memory leaks
        const cleanUp = () => {
            window.removeEventListener('resize', handleResize)
        }

        // this runs when the component unmounts i.e when it will be removed from the DOM
        // and also runs before re-running the effect
        return cleanUp;
    }, [])

    return windowSize;
}

export default useWindowSize;