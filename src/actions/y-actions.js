import uuid from 'uuid/v4';
import superagent from 'superagent';

export const yGet = report => ({
  type: 'Y_GET',
  payload: report,
});

export const yCreate = report => {
  console.log('report', report);
  console.log('apiurl:', __API_URL__);
  console.log('report.xID', report.xId);
  superagent.post(`${__API_URL__}/report/${report.xId}`)
    .send({customer: report.xID, source: report.source})
    .catch(console.error);
  return {
    type: 'Y_CREATE',
    payload: report,
  };
};

export const yUpdate = report => ({
  type: 'Y_UPDATE',
  payload: report,
});

export const yDelete = report => ({
  type: 'Y_DELETE',
  payload: report,
});

export const yReset = () => ({type: 'Y_RESET'});