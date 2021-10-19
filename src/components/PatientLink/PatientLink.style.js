import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  link: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 5,
  },
  hairline: {
    backgroundColor: colors.red1,
    borderRadius: 5,
    margin: 'auto',
    width: 20,
    height: 4,
  }
});

export default styleSheet;
