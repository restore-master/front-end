import reducer from '../../reducers/report';
require('jest');

describe('report reducer', function () {
  it('should return initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });
  it('should handle REPORT_UPDATE', () => {
    let reportOne = { customer: '22', _id: '1234', source: 'yooo'};
    let reportTwoUpdate = { customer: '22', _id: '1234', source: 'gruu'};
    let previousState = {
      '22': [reportOne],
    };

    let state = reducer(previousState, {
      type: 'REPORT_UPDATE',
      payload: reportTwoUpdate,
    });

    expect(state[22].length).toEqual(1);
    expect(state[22]).toContain(reportTwoUpdate);
    expect(state[22][0]).toHaveProperty('_id');
    expect(state[22][0]).toHaveProperty('source');
    expect(state[22][0]._id).toEqual('1234');
    expect(state[22][0].source).toEqual('gruu');
  });
  it('should handle REPORT_DELETE', () => {
    let reportOne = { customer: '22', _id: '1234', source: 'yooo'};
    let reportTwoDelete = { customer: '22', _id: '1234', source: 'yooo'};
    let previousState = {
      '22': [reportOne],
    };

    expect(previousState[22].length).toEqual(1);

    let state = reducer(previousState, {
      type: 'REPORT_DELETE',
      payload: reportTwoDelete,
    });

    expect(state[22].length).toEqual(0);
    expect(state[22][0]).toBeUndefined();
  });
  it('should handle REPORT_RESET', () => {
    let reportOne = { customer: '22', _id: '1234', source: 'yooo'};
    let reportTwo = { customer: '22', _id: '5678', source: 'gruu'};
    let previousState = {
      '22': [reportOne, reportTwo],
    };

    expect(previousState[22].length).toEqual(2);

    let state = reducer(previousState, {
      type: 'REPORT_RESET',
    });

    expect(state).toEqual({});
    expect(state[22]).toBeUndefined();
  });
});