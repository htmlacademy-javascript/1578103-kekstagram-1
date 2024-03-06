import { DATA_URL, ROUTE } from './constants.js';
import { showErrorGetData } from './message.js';


const getData = () => fetch(`${DATA_URL}${ROUTE.GET_DATA_URL}`)
  .then((response) => response.json())
  .catch(() => {
    showErrorGetData('Что то пошло ни так. Изображения других пользоваелей не загрузились.');
  });

const sendData = (formData) => {
  fetch(`${DATA_URL}${ROUTE.POST_DATA_URL}`, {
    method: 'POST',
    body: formData,
    // headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export { getData, sendData };
