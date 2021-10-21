import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: colors.grey2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius:5,
    padding: 10,
    minHeight: 90,

  },
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
  },
  line: {
    height: 5,
    width: '100%', 
    backgroundColor: colors.grey1,
    borderRadius: 5,
    position:'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  text: {
    marginTop: 5,
    color: colors.black
  }
});

export default styleSheet;