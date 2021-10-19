import React from 'react';
import { View, Text } from 'react-native';
import Title from '../components/title/Title';
import Feather from 'react-native-vector-icons/Feather';
import PatientInfo from '../components/PatientInfo/PatientInfo';
import PatientPictures from '../components/PatientPictures/PatientPictures';

import styleSheet from './Home.style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styleSheet.screen}>
      <View style={styleSheet.header}>
        <Text style={styleSheet.welcome}>Bonjour Dr Gravier</Text>
        <Feather name={'log-out'} size={20} color="#fff" />
      </View>
      <View style={styleSheet.container}>
        <PatientInfo />
        <Text style={styleSheet.title}>Photos</Text>
        <View style={styleSheet.pictures}>
          <PatientPictures />
          <PatientPictures />
          <PatientPictures />
          <PatientPictures />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;