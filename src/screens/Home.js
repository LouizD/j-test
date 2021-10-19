import React from 'react';
import { View } from 'react-native';
import Title from '../components/title/Title';
import PatientInfo from '../components/PatientInfo/PatientInfo';
import styleSheet from './Home.style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styleSheet.container}>
      <Title>Patients</Title>
      <PatientInfo />
    </View>
  )
}

export default HomeScreen;