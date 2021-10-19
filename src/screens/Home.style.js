import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../_var';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: Platform.OS === 'ios' ? '10%' : null,
    paddingHorizontal: 10,
  },
});

export default styleSheet;