import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ backgroundColor: props.colorButton, borderRadius: 10, padding: 10}}>
      <Text style={{ color: props.colorTxt, textAlign: "center"}}>
        {props.value}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;