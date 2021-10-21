import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: colors.grey2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius:5,
    padding: 10,
    minHeight: 90,
  },
  text: {
    marginTop: 5,
    color: colors.black
  }
})

export default styleSheet;