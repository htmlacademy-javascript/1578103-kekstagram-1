import { DATA_URL, Route, Method } from './constants.js';
import { showErrorGetData, showSuccessSendData, showErrorSendData } from './message.js';

// const ReturnFunction = {
//   GET: 'response.json()',
//   SEND: 'showSuccessSendData()',
// };

// const ErrorMessage = {
//   GET: 'showErrorGetData()',
//   SEND: 'showErrorSendData()',
// };

const load = (route, method = Method.GET, body = null) =>
  fetch(`${DATA_URL}${route}`, { method, body });


const getData = () => load(Route.GET_DATA_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    showErrorGetData();
  });

const sendData = (formData) => load(Route.POST_DATA_URL, Method.POST, formData)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    showSuccessSendData();
  })
  .catch(() => {
    showErrorSendData();
    throw new Error();
  });

// const getData = () => fetch(`${DATA_URL}${Route.GET_DATA_URL}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//     return response.json();
//   })
//   .catch(() => {

//     showErrorGetData();
//   });

// const sendData = (formData) =>
//   fetch(`${DATA_URL}${Route.POST_DATA_URL}`, {
//     method: 'POST',
//     body: formData,
//     // headers: { 'Content-Type': 'multipart/form-data' },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       showSuccessSendData();
//     })
//     .catch(() => {
//       showErrorSendData();
//       throw new Error();
//     });

export { getData, sendData };
