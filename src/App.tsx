import { StyledThemeProvider } from 'definitions/styled-components';
import { GameProvider } from 'contexts';

import Home from 'pages';

function App(): JSX.Element {
    return (
        <GameProvider>
            <StyledThemeProvider>
                <div className="App">
                    <Home />
                </div>
            </StyledThemeProvider>
        </GameProvider>
    );
}

export default App;
