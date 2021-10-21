import React from 'react';
import { View, Text, Image } from 'react-native';
import { smile } from '../../../assets/smile.png'
import styleSheet from './HelpModal.style';

const HelpModal = props => {
  return(
    <View style={styleSheet.container}>
      <View style={styleSheet.line}></View>
      <View style={styleSheet.containerTxt}>
        <Text style={styleSheet.txt}>{props.text1}</Text>
        <Text style={styleSheet.txt}>{props.text2}</Text>
        <View style={styleSheet.imgContainer}>
          <Image
            style={styleSheet.img}
            source={require('../../../assets/smile.png')}
          />
        </View>
      </View>
    </View>
  )
}

export default HelpModal;
