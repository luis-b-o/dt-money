import { SearchForm } from "@components/SearchForm";
import { Summary } from "@components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "@pages/Transactions/styles";

export function Transactions() {
  return (
    <div>
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 2.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/02/2022</td>
            </tr>
            <tr>
              <td width="50%">Café</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 40,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/02/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
