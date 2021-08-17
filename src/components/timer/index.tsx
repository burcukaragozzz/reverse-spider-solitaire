import React, { useState, useEffect } from 'react';

export const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    const prefix = (count: number) => {
        return count < 10 ? `0${count}` : count;
    };

    const secs = prefix(seconds % 60);
    const mins = prefix(Math.floor(seconds / 60) % 60);
    const hours = prefix(Math.floor(seconds / 60 / 60) % 24);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    return <span style={{ minWidth: '100px' }}>{`${hours}:${mins}:${secs}`}</span>;
};
