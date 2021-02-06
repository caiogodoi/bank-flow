import styled from 'styled-components/native';
import Button from 'apsl-react-native-button';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: black;
`;

export const Greetings = styled.Text`
  font-size: 24px;
  color: darkgray;
  font-weight: bold;
  margin-top: 100px;
`

export const WelcomeButton = styled(Button)`
  align-self: center;
  border-radius: 12px;
  width: 70%;
  background-color: blue;
  padding: 40px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 30px;
`;

export const ButtonContainer = styled.View`
  height: 70%;
  width: 100%;
  justify-content: flex-end;
`;