import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styleSheet from './PatientLink.style';

const PatientLink = props => {
  return (
    <TouchableOpacity style={styleSheet.link} onPress={props.onPressLink}>
      <Text style={[styleSheet.text, props.isActive ? styleSheet.textActive : styleSheet.textInactive]} >
        {props.value}
      </Text>
      <View style={[styleSheet.hairline, props.isActive ?  styleSheet.hairlineActive : styleSheet.hairlineInactive]} />
      </TouchableOpacity>
  )
}

export default PatientLink;