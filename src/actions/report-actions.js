import superagent from 'superagent';

export const reportGet = report => ({
  type: 'REPORT_GET',
  payload: report,
});

export const reportGetAll = reports => dispatch => {
  console.log('apiurl:', __API_URL__);
  return superagent.get(`${__API_URL__}/report`)
    .then(response => {
      return dispatch(reportGet(response.body));
    })
    .catch(console.error);
};

const reportPassIdAction = id => ({
  type: 'REPORT_ID_CREATE',
  payload: id,
});

export const reportCreate = report => dispatch => {
  console.log('apiurl:', __API_URL__);
  superagent.post(`${__API_URL__}/report/${report.customer}`)
    .send({customer: report.customer, source: report.source})
    .then(response  => {
      return dispatch(reportPassIdAction(response.body));
    })
    .catch(console.error);
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

export const reportUpdate = report => ({
  type: 'REPORT_UPDATE',
  payload: report,
});

export const reportDelete = report => ({
  type: 'REPORT_DELETE',
  payload: report,
});

export const reportReset = () => ({type: 'REPORT_RESET'});
