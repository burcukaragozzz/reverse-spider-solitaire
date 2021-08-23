import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GlobalStyle from 'styles/globalStyles';

import { GameProvider, StyledThemeProvider } from 'contexts';

import { Header } from 'components';
import { HomePage, GamePage, RulesPage, NoResult } from 'pages';

function App(): JSX.Element {
    return (
        <GameProvider>
            <StyledThemeProvider>
                <DndProvider backend={HTML5Backend}>
                    <div className="App">
                        <GlobalStyle />
                        <Header />
                        <Router>
                            <BrowserRouter>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/game" component={GamePage} />
                                <Route exact path="/rules" component={RulesPage} />
                                <Route exact component={NoResult} />
                            </BrowserRouter>
                        </Router>
                    </div>
                </DndProvider>
            </StyledThemeProvider>
        </GameProvider>
    );
}

export default App;
