import axios from 'react-native-axios';
import { Axios } from 'react-native-axios/lib/axios';
import reactNativeAxios from 'react-native-axios';

const url = 'www.germanoautomoveis.com.br/api/cars/';

const getCars = async (data) => {
  var instance = await reactNativeAxios
    .create({
      url: url,
      data: data,
      timeout: 10000,
    })
    .then((Response) => {
      console.log(Response);
    });
};
