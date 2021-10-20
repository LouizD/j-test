import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styleSheet from './PatientPictures.style';

const PatientPictures = props => {
  const navigation = useNavigation();

  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.photoTitleContainer}>
        <Text style={styleSheet.photoTitle}>Sourire de face</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('TakePicture')}>
        <View style={styleSheet.photoContainer}>
          <Feather name={'download'} size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PatientPictures;