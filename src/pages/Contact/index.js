import React, { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/buttonAction';
import Logo from '../../components/logo';
import { sendMessage } from '../../services/Sell';
import Colors from '../../styles/Colors';

const Contact = ({ navigation }) => {
  const tel1 = '(11) 5061-2835';
  const tel2 = '(11) 94777-2381';
  const emailTo = 'contato@germanoautomoveis.com.br';

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refMessage = useRef(null);

  const onPressPhone = (e) => {
    Linking.openURL(`tel:${e}`);
  };

  const onPressWhatsapp = (e) => {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=5511947772381&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20aplicativo%20de%20voc%C3%AAs.`
    );
  };

  const onPressMail = (e) => {
    Linking.openURL(`mailto:${e}?subject=Contato pelo Aplicativo`);
  };

  const onPressSend = async (e) => {
    if (name.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha o seu nome.'
      );
      return;
    }
    if (phone.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha o seu telefone.'
      );
      return;
    }
    if (email.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha o seu e-mail.'
      );
      return;
    }
    if (message.trim() === '') {
      Alert.alert(
        'Formulário Incompleto!',
        'Para continuar, preencha a mensagem.'
      );
      return;
    }

    const data = {
      name,
      phone,
      email,
      message,
    };

    const send = await sendMessage(data);

    if (send.status == 'successful') {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      Alert.alert('Mensagem enviada!', 'Agora aguarde retornarmos o contato.');
      navigation.navigate('Home', {
        screen: 'Main',
      });
    } else {
      Alert.alert(
        'Oops!',
        'Tivemos algum problem em enviar sua mensagem... tente novamente!'
      );
      return;
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={[styles.container, { paddingTop: 0 }]}
      >
        <Logo />
        <ScrollView>
          <Text style={styles.title}>Contatos</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={(e) => onPressPhone(tel1)}
          >
            <Text style={styles.subtitle}>Telefone</Text>
            <Icon
              style={styles.icon}
              name="phone"
              size={24}
              color={Colors.white}
            />
            <Text style={styles.phone}>{tel1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={(e) => onPressWhatsapp(tel2)}
          >
            <Text style={styles.subtitle}>Celular</Text>
            <Icon
              style={styles.icon}
              name="whatsapp"
              size={24}
              color={Colors.white}
            />
            <Text style={styles.phone}>{tel2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={(e) => onPressMail(emailTo)}
          >
            <Text style={styles.subtitle}>E-mail</Text>
            <Icon
              style={styles.icon}
              name="mail"
              size={24}
              color={Colors.white}
            />
            <Text style={styles.phone}>Enviar E-mail</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Formulário de Contato</Text>

          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInfo}
              ref={refName}
              placeholder="Nome"
              placeholderTextColor={Colors.inactive}
              onChangeText={(e) => setName(e.trim())}
              returnKeyType="next"
              keyboardType="ascii-capable"
              value={name}
              maxLength={50}
              //onSubmitEditing={(e) => refPhone.current.focus()}
            />
          </View>

          <View style={styles.textContainer}>
            <TextInputMask
              style={styles.textInfo}
              //ref={refPhone}
              onChangeText={(e) => setPhone(e.trim())}
              value={phone}
              placeholder="Telefone com DDD"
              placeholderTextColor={Colors.inactive}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
            />
          </View>

          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInfo}
              ref={refEmail}
              placeholder="E-mail"
              placeholderTextColor={Colors.inactive}
              onChangeText={(e) => setEmail(e.trim())}
              value={email}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCompleteType="email"
              onSubmitEditing={(e) => refMessage.current.focus()}
              maxLength={255}
            />
          </View>

          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInfo}
              value={message}
              ref={refMessage}
              placeholder="Mensagem"
              placeholderTextColor={Colors.inactive}
              onChangeText={(e) => setMessage(e.trim())}
            />
          </View>
          <Button text="Enviar Mensagem" onPress={onPressSend} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 25,
  },
  title: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    flex: 0.75,
    marginLeft: 15,
    marginRight: 2,
    color: Colors.text,
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 5,
    textAlign: 'right',
  },
  icon: {
    flex: 0.3,
    textAlign: 'center',
  },
  phone: {
    color: Colors.dolar,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '500',
    textDecorationLine: 'underline',
    flex: 2,
  },
  textContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.dark_bckgrd,
    marginHorizontal: 15,
    marginVertical: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInfo: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default Contact;
