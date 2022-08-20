import { Header } from "@components/Header";
import { TransactionsProvider } from "@contexts/TransactionProvider";
import { Transactions } from "@pages/Transactions";
import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/themes/default";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Header />
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
