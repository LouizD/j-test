import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styleSheet from './PatientLink.style';

const PatientLink = props => {
  return (
    <TouchableOpacity onPress={props.onPressLink}>
      <Text>
        {props.value}
      </Text>
      <View style={styleSheet.hairline} />
    </TouchableOpacity>
  )
}

export default PatientLink;