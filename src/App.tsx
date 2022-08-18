import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/themes/default";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Working</h1>
    </ThemeProvider>
  );
}
