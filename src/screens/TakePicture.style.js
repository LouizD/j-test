import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../_var';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  camera: {
    flex: 1,
  },
  back: {
    marginTop: 40,
    backgroundColor: colors.black
  },
});

export default styleSheet;