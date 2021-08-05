import { StyledThemeProvider } from "definitions/styled-components";
import { AppState } from "context/appState";

import Home from "pages";

function App(): JSX.Element {
  return (
    <AppState>
      <StyledThemeProvider>
        <div className="App">
          <Home />
        </div>
      </StyledThemeProvider>
    </AppState>
  );
}

export default App;
