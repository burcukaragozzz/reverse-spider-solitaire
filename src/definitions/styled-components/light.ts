// #region Global Imports
import { DefaultTheme } from 'styled-components/macro';
// #endregion Global Imports
import { common } from './common';

const light: DefaultTheme = {
    colors: {
        ...common.colors,
        toggleBorder: '#ABB7C4',
        toggleGradient: 'linear-gradient(45deg, #FFFFFF, #AB423C)',
        backgroundGradient: 'linear-gradient(45deg, #FFFFFF, #AB423C)',
        background: '#EFF1f5',
        headerBg: '#8da8c1',
        cardsBg: '#FFFFFF',
        borderColor: '#BABABA',
        dodgerBlue: '#007BFF',
    },
};

export { light };
