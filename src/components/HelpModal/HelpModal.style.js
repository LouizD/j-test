import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../_var';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left:0,
    right: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },
  containerTxt: {
    width: '80%',
    marginTop: 20,
  },
  txt: {
    fontSize: 16,
    marginTop: 5,
  },
  line: {
    backgroundColor: 'grey',
    width: 30,
    height: 4,
    borderRadius: 5,
    marginTop: 10
  },
  imgContainer: {
    marginTop: 10,
    height: '50%'
  },
  img: {
    width: '100%',
    height: '100%'
  }
})

export default styleSheet;


