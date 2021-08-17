// #region Global Imports
import { DefaultTheme } from 'styled-components/macro';
// #endregion Global Imports
import { common } from './common';

const light: DefaultTheme = {
    colors: {
        ...common.colors,
        toggleBorder: '#549AB8',
        toggleGradient: 'linear-gradient(45deg, #235DA8, #FFFFFF)',
        backgroundGradient: 'linear-gradient(45deg, #FFFFFF, #AB423C)',
        background: '#EFF1F5',
        headerBg: '#318C52',
        buttonBg: '#42A14A',
        borderColor: '#BABABA',
        textColor: '#484B57',
        modalBg: '#F5F7FA',
    },
};

export { light };
