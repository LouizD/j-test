import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Camera } from 'expo-camera';
import HelpModal from '../../components/HelpModal/HelpModal';

import styleSheet from './TakePictureScreen.style';

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
    <TouchableWithoutFeedback onPress={() => setShowHelp(false)}>
      <View style={styleSheet.container}>
        <TouchableOpacity style={styleSheet.back} onPress={() => {navigation.goBack();}}>
          <AntDesign name={"left"} color={'white'} size={25} />
        </TouchableOpacity>
        <Camera style={styleSheet.camera} type={type} ref={ref => { setCameraRef(ref); }}>
          <View style={styleSheet.buttonsContainer}>
          <TouchableOpacity style={styleSheet.helpButton} onPress={() => { setShowHelp(!showHelp)} }>
            <AntDesign name={"infocirlce"} color={'white'} size={25} />
          </TouchableOpacity>
            <TouchableOpacity style={styleSheet.takePicButton} onPress={async() => {
                if(cameraRef){
                  let photo = await cameraRef.takePictureAsync();
                  console.log('photo', photo);
                }
              }}>
              <View style={styleSheet.takePicButtonCircle1}>
                <View style={styleSheet.takePicButtonCircle2} >
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleSheet.flipButton}
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
        {showHelp && <HelpModal />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TakePictureScreen;