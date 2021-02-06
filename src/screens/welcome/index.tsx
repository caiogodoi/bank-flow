import React from 'react';

import * as S from './styles';
import useWelcome from './welcome.hook';

function Welcome() {
  const { navigateToDashboard } = useWelcome();

  return(
    <S.Container>
      <S.Greetings>
        Welcome to Bank Flow
      </S.Greetings>
      <S.ButtonContainer>
        <S.WelcomeButton onPress={navigateToDashboard}>
          <S.TextButton>
            Dashboard
          </S.TextButton>
        </S.WelcomeButton>
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Welcome;