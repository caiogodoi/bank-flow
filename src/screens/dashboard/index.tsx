import React from 'react';

import * as S from './styles';
import OpenEye from '../../icons/open-eye';
import ClosedEye from '../../icons/closed-eye';

import { valueColor } from '../../utils/value-color';
import useDashboard, { Transaction } from './dashboard.hook';

function Dashboard() {
  const { name, balance, maskedBalance, transactions, isAmountVisible, toggleAmountVisibility, toggleReduceTransactions } = useDashboard();

  return (
    <S.Container>
      <S.Header>
        <S.Welcome>{`Welcome ${name}`}</S.Welcome>
        <S.AmountContainer>
          <S.UserAmount color={valueColor(balance)}>{`$ ${isAmountVisible ? balance : maskedBalance}`}</S.UserAmount>
          {isAmountVisible ? <OpenEye onPress={toggleAmountVisibility}/> : <ClosedEye onPress={toggleAmountVisibility}/>}
        </S.AmountContainer>
      </S.Header>
      <S.TransactionTitle>Transactions</S.TransactionTitle>
      <S.TransactionsContainer reduced={transactions?.length === 3}>
        {transactions?.map((transaction: Transaction) => {
          const newDate = new Date(transaction.date);
          const formatedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
          return (
            <S.TransactionContainer key={transaction._id}>
              <S.Row>
                <S.TransactionsDate>{formatedDate}</S.TransactionsDate>
                <S.TransactionsReason>{transaction.description}</S.TransactionsReason>
              </S.Row>
              <S.TransactionsAmount color={valueColor(Number(transaction.amount))}>{`$ ${transaction.amount}`}</S.TransactionsAmount>
            </S.TransactionContainer>
          )
        })}
      </S.TransactionsContainer>
      <S.MoreButton onPress={toggleReduceTransactions}>
        <S.ButtonText>Show all transactions</S.ButtonText>
      </S.MoreButton>
    </S.Container>
  )
}

export default Dashboard;