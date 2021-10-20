import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../_var';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '40%',
    position: 'absolute',
    bottom: 0,
    left:0,
    right: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },
  line: {
    backgroundColor: 'grey',
    width: 30,
    height: 4,
    borderRadius: 5,
    marginTop: 10
  }
})

export default styleSheet;


