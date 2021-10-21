import React, { useState } from 'react';
import Tab from '../Tab/Tab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import styleSheet from './TabsBar.style';

import { TouchableOpacity, View, Text } from 'react-native';
import { colors } from '../../_var';

const TabsBar = (props) => {
  const [current, setCurrent] = useState("account");

  return (
    <View style={styleSheet.tabContainer}>
      <Tab style="AntDesign" styleIcon="user" current={current === "account"} value="Espace Pro"/>
      <Tab style="AntDesign" styleIcon="calendar" current={current === "agenda"} value="Agenda"/>
      <Tab style="AntDesign" styleIcon="filetext1" current={current === "patients"} value="Patients"/>
      <Tab style="AntDesign" styleIcon="pause" current={current === "aligners"} value="Aligneurs"/>
      <Tab style="Feather" styleIcon="navigation" current={current === "pickup"} value="Ramassage"/>
    </View>
  )
}

export default TabsBar;