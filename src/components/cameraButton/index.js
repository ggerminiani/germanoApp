import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { StyleSheet, TouchableOpacity, View, Modal, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../styles/Colors';
import numeral from '../../vendros/numeral';

const CameraButton = ({ onPress }) => {
  const refCamera = useRef(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [turnFlashOn, setTurnFlashOn] = useState(false);
  const [modal, setModal] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const onPressTakePicture = async () => {
    if (refCamera) {
      const options = { quality: 0.1, base64: false, skipProcessing: true };
      let photo = await refCamera.current.takePictureAsync(options);
      setModal(false);
      onPress(photo);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={hasPermission === true ? false : true}
        style={styles.containerButton}
        onPress={(e) => setModal(true)}
      >
        <Icon
          name="camera"
          size={45}
          color={hasPermission === true ? Colors.white : Colors.inactive}
        />
      </TouchableOpacity>

      <Modal animationType="slide" visible={modal}>
        <Camera
          style={{ flex: 1 }}
          type={type}
          flashMode={
            !turnFlashOn
              ? Camera.Constants.FlashMode.false
              : Camera.Constants.FlashMode.on
          }
          zoom={zoom}
          onCameraReady={() => {
            setCameraReady(true);
          }}
          ref={refCamera}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginTop: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: Colors.white,
                      margin: 10,
                      opacity: 0.5,
                    }}
                  >
                    {zoom === 0
                      ? ''
                      : `Zoom: ${numeral(zoom)
                          .format('0.0')
                          .replace(',', '.')}x`}
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.buttonCamera}
                    onPress={(e) =>
                      type === Camera.Constants.Type.back
                        ? setType(Camera.Constants.Type.front)
                        : setType(Camera.Constants.Type.back)
                    }
                    disabled={!cameraReady}
                  >
                    <Icon
                      name={
                        type === Camera.Constants.Type.back
                          ? 'toggle-switch-off-outline'
                          : 'toggle-switch'
                      }
                      size={35}
                      color={Colors.white}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonCamera}
                    onPress={(e) =>
                      !turnFlashOn
                        ? setTurnFlashOn(true)
                        : setTurnFlashOn(false)
                    }
                    disabled={!cameraReady}
                  >
                    <Icon
                      name={!turnFlashOn ? 'flash-off' : 'flash'}
                      size={35}
                      color={Colors.white}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity
                style={styles.buttonCamera}
                onPress={(e) => {
                  setCameraReady(false);
                  setType(Camera.Constants.Type.back);
                  setZoom(0);
                  setTurnFlashOn(false);
                  setModal(false);
                }}
                disabled={!cameraReady}
              >
                <Icon name="close" size={35} color={Colors.white} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonCamera}
                onPress={onPressTakePicture}
                disabled={!cameraReady}
              >
                <Icon name="brightness-1" size={35} color={Colors.white} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonCamera}
                onPress={(e) => {
                  if (zoom >= 0.3) {
                    setZoom(0);
                  } else {
                    setZoom(zoom + 0.1);
                  }
                }}
                disabled={!cameraReady}
              >
                <Icon
                  name="magnify-plus-outline"
                  size={35}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
  },
  containerButton: {
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
  buttonCamera: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: Colors.white,
    borderWidth: 2,
  },
});

export default CameraButton;
