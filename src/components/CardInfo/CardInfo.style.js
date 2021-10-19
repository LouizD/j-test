import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  }
});

export default styleSheet;