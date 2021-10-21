import React from 'react';
import { View, Text } from 'react-native';
import styleSheet from './HelpModal.style';

const HelpModal = () => {
  return(
    <View style={styleSheet.container}>
      <View style={styleSheet.line}></View>
      <Text>Ceci est une aide</Text>
    </View>
  )
}

export default HelpModal;
