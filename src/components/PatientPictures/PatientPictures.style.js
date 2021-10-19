import React from 'react';
import { StyleSheet} from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  container: {
    width: '49%',
    marginBottom: 
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.red1,
  },
  photoTitleContainer: {
    backgroundColor: colors.red3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 5,
  },
  photoTitle: {
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  photoContainer: {
    backgroundColor: "#FAFBFB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
    height: 80,
  }
});

export default styleSheet;