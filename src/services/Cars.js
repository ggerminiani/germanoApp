import axios from 'axios';

const url = 'https://www.germanoautomoveis.com.br/api/cars/';

export const getCars = async (data) => {
  const response = await axios
    .post(url, data, { timeout: 60000 })
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

export const urlPhotos = 'https://www.germanoautomoveis.com.br/images/cars/';
