import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledThemeProvider } from 'definitions/styled-components';
import GlobalStyle from 'styles/globalStyles';

import { GameProvider } from 'contexts';

import { Header } from 'components';
import { HomePage, GamePage } from 'pages';

function App(): JSX.Element {
    return (
        <GameProvider>
            <StyledThemeProvider>
                <Router>
                    <div className="App">
                        <GlobalStyle />
                        <Header />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/game" component={GamePage} />
                        </Switch>
                    </div>
                </Router>
            </StyledThemeProvider>
        </GameProvider>
    );
}

export default App;
