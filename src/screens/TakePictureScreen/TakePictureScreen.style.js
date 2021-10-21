import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../_var';

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
  buttonsContainer:  {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  helpButton:  {
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  takePicButton:  {
    alignSelf: 'flex-end', 
    alignItems: 'center'
  },
  takePicButtonCircle1: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 50,
    width:50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePicButtonCircle2: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 40,
    width:40,
    backgroundColor: 'white',
  },
  flipButton: {
    alignSelf: 'flex-end'
  }
});

export default styleSheet;