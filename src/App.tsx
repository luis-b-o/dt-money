import { Header } from "@components/Header";
import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/themes/default";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
