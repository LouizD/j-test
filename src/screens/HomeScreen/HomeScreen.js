import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Title from '../../components/Title/Title';
import Button from '../../components/Buttons/Buttons';
import Feather from 'react-native-vector-icons/Feather';
import PatientInfo from '../../components/PatientInfo/PatientInfo';
import PatientPictures from '../../components/PatientPictures/PatientPictures';
import TabsBar from '../../components/TabsBar/TabsBar';


import styleSheet from './HomeScreen.style';
import { colors } from '../../_var';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styleSheet.screen}>
      <View style={styleSheet.header}>
        <Text style={styleSheet.welcome}>Bonjour Dr Gravier</Text>
        <Feather name={'log-out'} size={20} color="#fff" />
      </View>
      <View style={styleSheet.container}>
          <PatientInfo />
          <Title style={styleSheet.title}>Photos</Title>
          <ScrollView style={{ height: '80%'}} persistentScrollbar={true} showsVerticalScrollIndicator={true}>
            <View style={styleSheet.pictures}>
              <PatientPictures />
              <PatientPictures />
              <PatientPictures />
              <PatientPictures />
              <PatientPictures />
              <PatientPictures />
            </View>
          </ScrollView>
          <View style={styleSheet.bottom}>
            <View style={styleSheet.buttonsContainer}>
              <Button
                onPress={() => console.log('Valider la consulation')}
                value={"Valider la consulation"}
                colorButton={colors.red1}
                colorTxt={colors.white}
                style={{width: '49%'}}
              />
              <Button
                onPress={() => console.log('Patient non elligible')}
                value={"Patient non elligible"}
                colorButton={colors.green1}
                colorTxt={colors.green2}
                style={{width: '49%'}}
              />
            </View>
            <TabsBar />
          </View>
      </View>
    </View>
  )
}

export default HomeScreen;