// #region Global Imports
import 'styled-components';
// #endregion Global Imports
type CommonColors = 'transparent' | 'lightGrey' | 'white' | 'green' | 'lightGreen';

type ExtendedColors =
    | CommonColors
    | 'toggleBorder'
    | 'toggleGradient'
    | 'backgroundGradient'
    | 'background'
    | 'headerBg'
    | 'buttonBg'
    | 'borderColor'
    | 'textColor'
    | 'modalBg';
declare module 'styled-components' {
    export interface BaseTheme {
        colors: Record<CommonColors, string>;
    }

    export interface DefaultTheme extends BaseTheme {
        colors: Record<ExtendedColors, string>;
    }
}
