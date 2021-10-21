import React from 'react';
import { StyleSheet} from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  touchableArea: {
    width: '49%',
    height: 'auto',
  },
  container: {
    width: '100%',
    height: 'auto',
    marginBottom: 10
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
    padding: '10%'
  }
});

export default styleSheet;