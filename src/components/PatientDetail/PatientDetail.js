import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styleSheet from '../PatientDetail/PatientDetail.style';

const PatientDetail = props => {
  const listText = props.text;
  return (
    <View style={styleSheet.container}>
      {listText.map((text, index) => {
        return(<Text key={index} style={styleSheet.text}>{text}</Text>)
      })}
    </View>
  )
}

export default PatientDetail;