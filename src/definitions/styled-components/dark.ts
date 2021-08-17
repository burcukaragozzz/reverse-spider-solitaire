// #region Global Imports
import { DefaultTheme } from 'styled-components/macro';
// #endregion Global Imports
import { common } from './common';

const dark: DefaultTheme = {
    colors: {
        ...common.colors,
        toggleBorder: '#556678',
        toggleGradient: 'linear-gradient(45deg, #4D536E, #FFFFFF)',
        backgroundGradient: 'linear-gradient(45deg, #4D536E, #FFFFFF)',
        background: '#2F3138',
        headerBg: '#20232A',
        buttonBg: '#2A662F',
        borderColor: '#FFFFFF',
        textColor: '#EDEDED',
    },
};

export { dark };
