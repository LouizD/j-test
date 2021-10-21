import { setStatusBarHidden } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../_var';

const styleSheet = StyleSheet.create({
  screen: {
    backgroundColor: colors.red1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: Platform.OS === 'ios' ? '10%' : null,
  },
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: 20,
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  welcome: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  pictures: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20, 
    marginBottom: 20
  },
  bottom: {
    alignSelf: 'flex-end',
    width: '100%'
  }
});

export default styleSheet;