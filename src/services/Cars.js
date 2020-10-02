import axios from 'axios';

const urlGA = 'https://www.germanoautomoveis.com.br/api/cars/';
const urlFIPE = 'http://fipeapi.appspot.com/api/1/carros/';

export const getCars = async (data) => {
  const response = await axios
    .post(urlGA, data, { timeout: 60000 })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error.toString().toLowerCase().includes('timeout ')) {
        return {
          status: 'error',
          message: 'Requisição ultrapassou o limite de tempo de resposta.',
        };
      } else {
        return { status: 'error', message: error.message };
      }
    });

  return response;
};

export const getFIPE = async (data) => {
  let url = urlFIPE + data.urlComplement;
  console.log(url);
  const response = await axios
    .get(url, { timeout: 60000 })
    .then(function (response) {
      let data = [];
      response.data.map((item) => {
        data.push({ id: item.id, info: item.name });
      });
      console.log(data);
      return data;
    })
    .catch(function (error) {
      if (error.toString().toLowerCase().includes('timeout ')) {
        return {
          status: 'error',
          message: 'Requisição ultrapassou o limite de tempo de resposta.',
        };
      } else {
        return { status: 'error', message: error.message };
      }
    });

  return response;
};

export const urlPhotos = 'https://www.germanoautomoveis.com.br/images/cars/';
