import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';

import styleSheet from './PatientPictures.style';

const PatientPictures = props => {

  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.photoTitleContainer}>
        <Text style={styleSheet.photoTitle}>Sourire de face</Text>
      </View>
      <View style={styleSheet.photoContainer}>
        <Feather name={'download'} size={20} color="#000" />
      </View>
    </View>
  )
}

export default PatientPictures;