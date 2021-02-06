import { useEffect, useReducer } from 'react';
import mocky from '../../__mocky__/index.json';

export interface UseDashboard {
  name: string;
  balance: number;
  maskedBalance: string;
  transactions: Transaction[] | null | undefined;
  isAmountVisible: boolean;
  toggleAmountVisibility: () => void;
  toggleReduceTransactions: () => void;
};

export interface Transaction {
  _id: string;
  date: string;
  description: string;
  amount: string;
}

interface State {
  id: string;
  name: string;
  balance: number;
  maskedBalance: string;
  transactions: Transaction[] | null;
  reduceTransactions: boolean;
  isAmountVisible: boolean;
}

const initialState: State = {
  id: '',
  name: '',
  balance: 0,
  maskedBalance: '****',
  transactions: null,
  reduceTransactions: true,
  isAmountVisible: true
};

function reducer(state: State, payload: Partial<State>): State {
  return {
    ...state,
    ...payload,
  };
}

function useDashboard(): UseDashboard {
  const [state, dispatchValues] = useReducer(reducer, initialState);

  const {
    name,
    balance,
    maskedBalance,
    reduceTransactions,
    isAmountVisible
  } = state;

  const transactions = reduceTransactions ? state.transactions?.slice(-3) : state.transactions;

  function getUserInfo() {
    dispatchValues({
      id: mocky._id,
      name: mocky.name,
      balance: Number(mocky.balance),
      transactions: mocky.transactions
    });
  }

  function toggleAmountVisibility() {
    dispatchValues({ isAmountVisible: !isAmountVisible })
  }

  function toggleReduceTransactions() {
    dispatchValues({ reduceTransactions: !reduceTransactions })
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return { name, balance, maskedBalance, transactions, isAmountVisible, toggleAmountVisibility, toggleReduceTransactions }
};

export default useDashboard;