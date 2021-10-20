import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styleSheet from './HelpModal.style';

const HelpModal = (props) => {
  return(
    <View style={styleSheet.container}>
      <View style={styleSheet.line}></View>
      <Text>Ceci est une aide</Text>
    </View>
  )
}

export default HelpModal;
