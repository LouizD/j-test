import React, { useState } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import { View, Text, TouchableOpacity } from 'react-native';
import PatientLink from '../PatientLink/PatientLink';
import { dummyData } from '../../_var';

const PatientInfo = props => {
  const [show, setShow] = useState("profile");

  let content = (
    <CardInfo>
        <Text>{dummyData.patientStatus}</Text>
        <Text>{dummyData.patientMeeting}</Text>
      </CardInfo>
  )

  switch(show) {
    case 'profile':
      content = (
        <CardInfo>
            <Text>{dummyData.patientStatus}</Text>
            <Text>{dummyData.patientMeeting}</Text>
          </CardInfo>
      )
    break;
    case 'info':
      content = (
        <CardInfo>
          <Text>Informations</Text>
          <Text>Références : {dummyData.patientId}</Text>
          <Text>Date de naissance : {dummyData.patientBirthday}</Text>
          <Text>Âge : {dummyData.patientAge}</Text>
        </CardInfo>
      )
    break;
    case 'contact':
      content = (
        <CardInfo>
          <Text>Contact</Text>
          <Text>E-mail : {dummyData.patientEmail}</Text>
          <Text>Téléphone portable : {dummyData.patientPhone}</Text>
        </CardInfo>
      )
    break;
  }


  return (
    <View>
      <Text>{dummyData.patientName}</Text>

      <View>
        <PatientLink 
          onPressLink={() => {
            setShow("profile")
          }}
          value="Profil"/>
        <PatientLink 
          onPressLink={() => {
            setShow("info")
          }}
          value="Informations" />
        <PatientLink 
          onPressLink={() => {
            setShow("contact")
          }}
          value="Contact" />
      </View>
      {content}
    </View>
  )
}

export default PatientInfo;