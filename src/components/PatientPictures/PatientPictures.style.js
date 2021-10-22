import React from 'react';
import { StyleSheet} from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  touchableArea: {
    width: '49%',
    height: 'auto',
  },
  container: {
    backgroundColor: colors.red3,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 'auto',
    marginBottom: 10,
    padding: 5,
  },
  photoTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
});

export default styleSheet;