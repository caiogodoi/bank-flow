import React from 'react';

import * as S from './styles';

function Welcome() {
  return(
    <S.Container>
      <S.Greetings>
        Welcome to Bank Flow
      </S.Greetings>
      <S.ButtonContainer>
        <S.WelcomeButton onPress={() => {}}>
          <S.TextButton>
            Dashboard
          </S.TextButton>
        </S.WelcomeButton>
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Welcome;