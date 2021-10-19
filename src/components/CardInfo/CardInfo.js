import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styleSheet from './CardInfo.style';
import { dummyData } from '../../_var';

const CardInfo = (props) => {
  return(
    <View style={[styleSheet.card, props.style]}>
      {props.children}
    </View>
  )
}

export default CardInfo;