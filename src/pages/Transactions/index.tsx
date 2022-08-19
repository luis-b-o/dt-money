import { SearchForm } from "@components/SearchForm";
import { Summary } from "@components/Summary";
import { TransactionContext } from "@contexts/TransactionsContext";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "@pages/Transactions/styles";
import { useContext } from "react";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
