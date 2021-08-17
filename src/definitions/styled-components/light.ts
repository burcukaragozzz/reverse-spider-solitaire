// #region Global Imports
import { DefaultTheme } from 'styled-components/macro';
// #endregion Global Imports
import { common } from './common';

const light: DefaultTheme = {
    colors: {
        ...common.colors,
        toggleBorder: '#45b06c',
        toggleGradient: 'linear-gradient(45deg, #ededed, #76c292)',
        backgroundGradient: 'linear-gradient(45deg, #FFFFFF, #AB423C)',
        background: '#EFF1f5',
        headerBg: '#318c52',
        buttonBg: '#42a14a',
        borderColor: '#BABABA',
    },
};

export { light };
