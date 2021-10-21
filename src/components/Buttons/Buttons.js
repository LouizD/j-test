import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styleSheet from './Buttons.style';


const Button = props => {

  const styleContainer = {
    ...props.style,
    backgroundColor: props.colorButton,
  }

  const colorTxt = {
    color: props.colorTxt
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={[styleSheet.container, styleContainer]}>
      <Text style={[ colorTxt, styleSheet.text]}>
        {props.value}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;