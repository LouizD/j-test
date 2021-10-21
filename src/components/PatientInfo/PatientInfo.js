import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PatientLink from '../PatientLink/PatientLink';
import PatientDetail from '../PatientDetail/PatientDetail';
import { dummyData } from '../../_var';

import styleSheet from './PatientInfo.style';

const PatientInfo = props => {
  const [show, setShow] = useState("profile");

  let content;

  switch(show) {
    case 'profile':
      content = (
        <PatientDetail 
          text={[dummyData.patientStatus, dummyData.patientMeeting]}
        />
      )
    break;
    case 'info':
      content = (
        <PatientDetail 
          text={[`Références : ${dummyData.patientId}`, `Date de naissance : ${dummyData.patientBirthday}`, `Âge : ${dummyData.patientAge}`]} 
        />
      )
    break;
    case 'contact':
      content = (
        <PatientDetail 
          text={[`E-mail : ${dummyData.patientEmail}`, `Téléphone portable : ${dummyData.patientPhone}`]} 
        />
      )
    break;
    default:
      <PatientDetail 
        text={[dummyData.patientStatus, dummyData.patientMeeting]} 
      />
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