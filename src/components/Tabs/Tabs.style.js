import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
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
  },
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