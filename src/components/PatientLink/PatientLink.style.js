import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  link: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textActive: {
    color: colors.black,
  },
  textInactive: {
    color: 'grey',
  },
  text: {
    marginBottom: 5,
  },
  hairlineActive: {
    backgroundColor: colors.red1,
  },
  hairlineInactive: {
    backgroundColor: 'grey',
  },
  hairline: {
    borderRadius: 5,
    margin: 'auto',
    width: 20,
    height: 4,
  }
});

export default styleSheet;
