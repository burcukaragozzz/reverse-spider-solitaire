import { Fireworks as FireworksShow } from 'fireworks-js/dist/react';

export const Fireworks = () => {
    const options = {
        speed: 3,
    };

    const style = {
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000',
        opacity: 0.7,
    } as React.CSSProperties;

    return <FireworksShow options={options} style={style} />;
};
