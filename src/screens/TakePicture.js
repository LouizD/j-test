import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Camera } from 'expo-camera';

import styleSheet from './TakePicture.style';

const TakePictureScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null)
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback style={{backgroundColor: '#000', flex: 1}} onPress={() => setShowHelp(false)}>
      <View style={styleSheet.container}>
        <TouchableOpacity style={styleSheet.back} onPress={() => {navigation.goBack();}}>
          <AntDesign name={"left"} color={'white'} size={25} />
        </TouchableOpacity>
        <Camera style={styleSheet.camera} type={type} ref={ref => { setCameraRef(ref); }}>
          <View style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
          <TouchableOpacity style={{alignSelf: 'flex-end', alignItems: 'center'}} onPress={() => {setShowHelp(!showHelp)}}>
            <AntDesign name={"infocirlce"} color={'white'} size={25} />
          </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'flex-end', alignItems: 'center'}} onPress={async() => {
                if(cameraRef){
                  let photo = await cameraRef.takePictureAsync();
                  console.log('photo', photo);
                }
              }}>
              <View style={{
                borderWidth: 2,
                borderRadius:"50%",
                borderColor: 'white',
                height: 50,
                width:50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <View style={{
                  borderWidth: 2,
                  borderRadius:"50%",
                  borderColor: 'white',
                  height: 40,
                  width:40,
                  backgroundColor: 'white'}} >
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <AntDesign name={"sync"} color={'white'} size={25} />
            </TouchableOpacity>
          </View>
        </Camera>
        {showHelp && <View style={{ backgroundColor: 'white', height: '40%', position: 'absolute', bottom: 0, left:0, right: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center' }}><View style={{backgroundColor: 'grey', width: 30, height: 4, borderRadius: 5, marginTop: 10}}></View><Text>Ceci est une aide</Text></View>}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TakePictureScreen;