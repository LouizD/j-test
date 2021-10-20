import React from 'react';
import { View, Text } from 'react-native';
import Title from '../components/title/Title';
import Button from '../components/Buttons/Buttons';
import Feather from 'react-native-vector-icons/Feather';
import PatientInfo from '../components/PatientInfo/PatientInfo';
import PatientPictures from '../components/PatientPictures/PatientPictures';
import Tabs from '../components/Tabs/Tabs';


import styleSheet from './Home.style';
import { colors } from '../_var';

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
        <Button
          onPress={() => console.log('Valider la consulation')}
          value={"Valider la consulation"}
          colorButton={colors.red1}
          colorTxt={colors.white}
        />
        <Button
          onPress={() => console.log('Patient non elligible')}
          value={"Patient non elligible"}
          colorButton={colors.green1}
          colorTxt={colors.green2}
        />
        <Tabs />
      </View>
    </View>
  )
}

export default HomeScreen;