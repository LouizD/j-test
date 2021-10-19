import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  patientName: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.red1,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styleSheet;