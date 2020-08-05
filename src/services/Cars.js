import axios from 'axios';

const url = 'https://www.germanoautomoveis.com.br/api/cars/';

export const getCars = async (data) => {
  /*const instance = await axios.create({
    url: url,
    data: data,
    timeout: 10000,
  });*/

  const response = await axios
    .post(url, data, { timeout: 100 })
    .then(function (response) {
      console.log('response');
      console.log(response);
    })
    .catch(function (error) {
      console.log('error');
      console.log(error);
    });

  //console.log('instance');
  //console.log(response.data);
  //console.log(response);
  return response;
};
