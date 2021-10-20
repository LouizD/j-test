import React from 'react';
import { Text } from 'react-native';
import styleSheet from './Title.style';
import {colors} from '../../_var'


const Title = props => {
  return (
    <Text style={[styleSheet.textStyle, props.style]}>
      {props.children}
    </Text>
  )
}

export default Title;