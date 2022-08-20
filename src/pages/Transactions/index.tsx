import { SearchForm } from "@components/SearchForm";
import { Summary } from "@components/Summary";
import { TransactionsContext } from "@contexts/TransactionsContext";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "@pages/Transactions/styles";
import { dateFormatter, priceFormatter } from "@utils/formater";
import { useContext } from "react";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

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
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
