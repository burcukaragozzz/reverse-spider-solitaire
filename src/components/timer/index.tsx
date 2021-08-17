import React, { useState, useEffect, useRef } from 'react';

export const Timer: React.FC = () => {
    const timerIdRef = useRef(0);
    const [seconds, setSeconds] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) {
            return;
        }
        timerIdRef.current = window.setInterval(() => setSeconds(seconds + 1), 1000);
    };

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
        setSeconds(0);
    };

    const prefix = (count: number) => {
        return count < 10 ? `0${count}` : count;
    };

    const secs = prefix(seconds % 60);
    const mins = prefix(Math.floor(seconds / 60) % 60);
    const hours = prefix(Math.floor(seconds / 60 / 60) % 24);

    useEffect(() => {
        startHandler();

        return stopHandler();
    }, [seconds]);

    return (
        <div>
            <span>{`${hours}:${mins}:${secs}`}</span>
            {console.log('timer', `${hours}:${mins}:${secs}`)}
            {console.log('timer', `${seconds}`)}
        </div>
    );
};
