import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styleSheet from './PatientLink.style';

const PatientLink = props => {
  return (
    <TouchableOpacity style={styleSheet.link} onPress={props.onPressLink}>
      <Text style={styleSheet.text} >
        {props.value}
      </Text>
      <View style={styleSheet.hairline} />
    </TouchableOpacity>
  )
}

export default PatientLink;