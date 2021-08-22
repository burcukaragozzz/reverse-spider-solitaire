import { ReactElement } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { render as baseRender, RenderOptions, RenderResult } from '@testing-library/react';

import { StyledThemeProvider } from 'contexts';

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders = ({ children }) => {
    return (
        <StyledThemeProvider>
            <DndProvider backend={HTML5Backend}>{children}</DndProvider>
        </StyledThemeProvider>
    );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
