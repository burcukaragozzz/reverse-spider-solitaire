import React from "react";

import { useTheme } from "definitions/styled-components";
import { ToggleContainer } from "./styled";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Toggle: React.FC<IButton> = () => {
  const { toggle, themeName } = useTheme();

  return (
    <ToggleContainer
      themeName={themeName}
      onClick={toggle}
      data-testid="toggle"
    >
      <div>
        <img src="/icons/sun-icon.svg" alt="sun" width="32" height="32" />
        <img src="/icons/moon-icon.svg" alt="moon" width="32" height="32" />
      </div>
    </ToggleContainer>
  );
};
