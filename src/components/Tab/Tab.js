import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import styleSheet from './Tab.style';
import { colors } from '../../_var';

const Tabs = (props) => {
  let icon;
  switch(props.style) {
    case "AntDesign" :
      icon = (<AntDesign name={props.styleIcon} color={props.current ? colors.red1 : colors.red3} size={25} />)
      break;
    case "Feather" :
        icon = (<Feather name={props.styleIcon} color={props.current ? colors.red1 : colors.red3} size={25} />)
        break;
  }

  return (
    <TouchableOpacity style={styleSheet.tab}>
      {icon}
      <Text style={[styleSheet.tabText, props.current ? {color: colors.red1} : {color: colors.red3}]}>{props.value}</Text>
      <View style={[styleSheet.dot, props.current ? {backgroundColor: colors.red1} : {backgroundColor: 'transparent'}]}></View>
    </TouchableOpacity>
)
}

export default Tabs;