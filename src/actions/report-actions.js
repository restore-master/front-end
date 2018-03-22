import superagent from 'superagent';

export const yGet = report => ({
  type: 'Y_GET',
  payload: report,
});

export const yCreate = report => {
  console.log('report', report);
  console.log('apiurl:', __API_URL__);
  console.log('report.xID', report.customer);
  superagent.post(`${__API_URL__}/report/${report.customer}`)
    .send({customer: report.customer, source: report.source})
    .catch(console.error);
  return {
    type: 'Y_CREATE',
    payload: report,
  };
};

// export const createActionRequest = (picture) => (dispatch) => {
//   let token = localStorage.getItem('token');

//   return superagent.post(`${__API_URL__}${routes.PICTURES_ROUTE}`)
//     .set('Authorization', `Bearer ${token}`)
//     .field('description', picture.description)
//     .attach('photo', picture.photo)
//     .then(response => {
//       return dispatch(createAction(response.body));
//     });
// };

export const yUpdate = report => ({
  type: 'Y_UPDATE',
  payload: report,
});

export const yDelete = report => ({
  type: 'Y_DELETE',
  payload: report,
});

export const yReset = () => ({type: 'Y_RESET'});