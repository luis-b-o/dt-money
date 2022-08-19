import { Header } from "@components/Header";
import { Transactions } from "@pages/Transactions";
import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/themes/default";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Transactions />
    </ThemeProvider>
  );
}
