import React from 'react';
import styled from 'styled-components/native';

/* https://github.com/styled-components/styled-components/issues/149 */
const ButtonBox = styled.TouchableHighlight.attrs({
  underlayColor: '#193441',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 41, 43);
  border-radius: 10px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-size: 16;
  font-family: RacingSansOne-Bold;
  color: ${props => props.text == "Go" ? "green" : "orange"};
`;

handleButtonPress = (value) => {
    alert(value);
};

export default Button = ({text}) => (
  <ButtonBox onPress={() => handleButtonPress(this)}>
    <ButtonText text={text}>{text}</ButtonText>
  </ButtonBox>
);
