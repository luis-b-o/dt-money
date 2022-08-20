import {
  CreateTransactionInput,
  ITransaction,
} from "@contexts/TransactionProvider";
import { createContext } from "use-context-selector";

interface TransactionsContextType {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextType);
