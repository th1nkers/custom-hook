import { useState, useEffect } from "react";

const useCounter = (backwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (backwards) {
                setCounter((prevCounter) => prevCounter - 1)
            } else {
                setCounter((prevCounter) => prevCounter + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [backwards]);

    return counter;
}

export default useCounter