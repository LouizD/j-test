import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import styleSheet from './Tabs.style';

import { TouchableOpacity, View, Text } from 'react-native';
import { colors } from '../../_var';

const Tabs = (props) => {
  return (
    <View style={styleSheet.tabContainer}>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"user"} color={colors.red3} size={25} />
        <Text style={styleSheet.tabText}>Espace Pro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"calendar"} color={colors.red3} size={25} />
        <Text style={styleSheet.tabText}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"filetext1"} color={colors.red3} size={25} />
        <Text style={styleSheet.tabText}>Patients</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <AntDesign name={"pause"} color={colors.red3} size={25} />
        <Text style={styleSheet.tabText}>Aligneurs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.tab}>
        <Feather name={"navigation"} color={colors.red3} size={25} />
        <Text style={styleSheet.tabText}>Ramassage</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tabs;