import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: Platform.OS === 'ios' ? '10%' : null,

  },
});

export default styleSheet;