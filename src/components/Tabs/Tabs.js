import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import styleSheet from './Tabs.style';

import { TouchableOpacity, View, Text } from 'react-native';
import { colors } from '../../_var';

const Tabs = (props) => {
  const [current, setCurrent] = useState("account");

  return (
    <View style={styleSheet.tabContainer}>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"user"} color={current === "account" ? colors.red1 : colors.red3} size={25} />
        <Text style={[styleSheet.tabText, current === "account" ? {color: colors.red1} : {color: colors.red3}]}>Espace Pro</Text>
        <View style={[styleSheet.dot, current === "account" ? {backgroundColor: colors.red1} : {backgroundColor: 'transparent'}]}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"calendar"} color={current === "agenda" ? colors.red1 : colors.red3} size={25} />
        <Text style={[styleSheet.tabText, current === "agenda" ? {color: colors.red1} : {color: colors.red3}]}>Agenda</Text>
        <View style={[styleSheet.dot, current === "agenda" ? {backgroundColor: colors.red1} : {backgroundColor: 'transparent'}]}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"filetext1"} color={current === "patients" ? colors.red1 : colors.red3} size={25} />
        <Text style={[styleSheet.tabText, current === "patients" ? {color: colors.red1} : {color: colors.red3}]}>Patients</Text>
        <View style={[styleSheet.dot, current === "patients" ? {backgroundColor: colors.red1} : {backgroundColor: 'transparent'}]}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"pause"} color={current === "aligners" ? colors.red1 : colors.red3} size={25} />
        <Text style={[styleSheet.tabText, current === "aligners" ? {color: colors.red1} : {color: colors.red3}]}>Aligneurs</Text>
        <View style={[styleSheet.dot, current === "aligners" ? {backgroundColor: colors.red1} : {backgroundColor: 'transparent'}]}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <Feather name={"navigation"} color={current === "pickup" ? colors.red1 : colors.red3} size={25} />
        <Text style={[styleSheet.tabText, current === "pickup" ? {color: colors.red1} : {color: colors.red3}]}>Ramassage</Text>
        <View style={[styleSheet.dot, current === "pickup" ? {backgroundColor: colors.red1} : {backgroundColor: 'transparent'}]}></View>
      </TouchableOpacity>
    </View>
  )
}

export default Tabs;