import styled from 'styled-components/native';
import Button from 'apsl-react-native-button';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DinamicColorProps {
  color: string;
}

interface TransactionsContainerProps {
  reduced?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 50px;
`;

export const Welcome = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
`;

export const UserAmount = styled.Text<DinamicColorProps>`
  color: ${({ color }) => color };
  font-size: 24px;
  margin-right: 8px;
`;

export const TransactionTitle = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const TransactionsContainer = styled.ScrollView<TransactionsContainerProps>`
  width: 90%;
  max-height: 55%;
  ${({ reduced }) => reduced && 'max-height: 200px'}
  margin-bottom: 10px;
  background-color: white;
  align-self: center;
  border-radius: 8px;
`;

export const TransactionContainer = styled.View`
  width: 90%;
  padding: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const TransactionsDate = styled.Text`
  font-size: 16px;
  color: gray;
  padding-right: 12px;
`;

export const TransactionsReason = styled.Text`
  font-size: 16px;
  color: darkgray;
`;

export const TransactionsAmount = styled.Text<DinamicColorProps>`
  font-size: 16px;
  color: ${({ color }) => color };
  text-align: center;
`;

export const MoreButton = styled(Button)`
  border: none;
`;

export const ButtonText = styled.Text`
  color: lightblue;
  font-size: 16px;
`;