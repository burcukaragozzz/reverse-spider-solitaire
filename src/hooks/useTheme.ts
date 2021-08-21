import { useContext } from 'react';
import { ThemeContext } from 'contexts';

export const useTheme = () => {
    const theme = useContext(ThemeContext);

    return theme;
};
