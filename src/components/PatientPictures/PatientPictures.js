import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../_var';
import styleSheet from './PatientPictures.style';

const PatientPictures = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styleSheet.touchableArea} onPress={() => navigation.navigate('TakePicture')}>
      <View style={styleSheet.container}>
        <Text style={styleSheet.photoTitle}>Sourire de face</Text>
        <Feather name={'download'} size={20} color={colors.white} />
      </View>
    </TouchableOpacity>
  )
}

export default PatientPictures;