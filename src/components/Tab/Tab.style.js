import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  tab: {
    alignItems: 'center'
  },
  tabText: {
    fontSize: 10,
    color: colors.red3,
    marginTop: 5,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginTop: 5
  }
});

export default styleSheet;