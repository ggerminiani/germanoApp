import * as ImagePicker from 'expo-image-picker';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../styles/Colors';

const Attachment = ({ onPress }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Desculpe, para acessar o seu rolo de câmera é necessário que nos dê a permissão para isso.'
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.2,
    });
    onPress(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerButton} onPress={pickImage}>
        <Icon name="paperclip" size={45} color={Colors.white} />
      </TouchableOpacity>
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
});

export default Attachment;
