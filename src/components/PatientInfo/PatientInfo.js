import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PatientLink from '../PatientLink/PatientLink';
import { dummyData } from '../../_var';

import styleSheet from './PatientInfo.style';

const PatientInfo = props => {
  const [show, setShow] = useState("profile");

  let content = (
    <View style={styleSheet.container}>
        <Text style={styleSheet.text}>{dummyData.patientStatus}</Text>
        <Text style={styleSheet.text}>{dummyData.patientMeeting}</Text>
      </View>
  )

  switch(show) {
    case 'profile':
      content = (
        <View style={styleSheet.container}>
            <Text style={styleSheet.text}>{dummyData.patientStatus}</Text>
            <Text style={styleSheet.text}>{dummyData.patientMeeting}</Text>
          </View>
      )
    break;
    case 'info':
      content = (
        <View style={styleSheet.container}>
          <Text style={styleSheet.text}>Références : {dummyData.patientId}</Text>
          <Text style={styleSheet.text}>Date de naissance : {dummyData.patientBirthday}</Text>
          <Text style={styleSheet.text}>Âge : {dummyData.patientAge}</Text>
        </View>
      )
    break;
    case 'contact':
      content = (
        <View style={styleSheet.container}>
          <Text style={styleSheet.text}>E-mail : {dummyData.patientEmail}</Text>
          <Text style={styleSheet.text}>Téléphone portable : {dummyData.patientPhone}</Text>
        </View>
      )
    break;
  }


  return (
    <View>
      <Text style={styleSheet.patientName}>Patient : {dummyData.patientName}</Text>

      <View style={styleSheet.links}>
        <PatientLink 
          isActive={ show === "profile"}
          onPressLink={() => {
            setShow("profile")
          }}
          value="Profil"/>
        <PatientLink 
          isActive={ show === "info"}
          onPressLink={() => {
            setShow("info")
          }}
          value="Informations" />
        <PatientLink
          isActive={ show === "contact"}
          onPressLink={() => {
            setShow("contact")
          }}
          value="Contact" />
          <View style={styleSheet.line}></View>
      </View>
      {content}
    </View>
  )
}

export default PatientInfo;