import reducer from '../../reducers/customer';
require('jest');

describe('customer reducer', function () {
  it('should return initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });
  it('should handle CUSTOMER_CREATE', () => {
    let customerOne = { _id: '1234', name: 'yooo', date: 'today'};
    let customerTwo = { _id: '5678', name: 'gruu', date: 'today'};

    let state = reducer([customerOne], {
      type: 'CUSTOMER_CREATE',
      payload: customerTwo,
    });

    expect(state).toContain(customerOne);
    expect(state).toContain(customerTwo);
  });
  it('should handle CUSTOMER_UPDATE', () => {
    let customerOne = { _id: '1234', name: 'yooo', date: 'today'};
    let customerTwoUpdate = { _id: '1234', name: 'gruu'};

    let state = reducer([customerOne], {
      type: 'CUSTOMER_UPDATE',
      payload: customerTwoUpdate,
    });

    expect(state.length).toEqual(1);
    expect(state[0]).toHaveProperty('_id');
    expect(state[0]).toHaveProperty('name');
    expect(state[0]._id).toEqual('1234');
    expect(state[0].name).toEqual('gruu');
  });
  it('should handle CUSTOMER_DELETE', () => {
    let customerOne = { _id: '1234', name: 'yooo', date: 'today'};
    let customerTwoDelete = { _id: '1234', name: 'yooo' };

    let state = reducer([customerOne], {
      type: 'CUSTOMER_DELETE',
      payload: customerTwoDelete,
    });

    expect(state.length).toEqual(0);
    expect(state[0]).toBeUndefined();
  });
  it('should handle CUSTOMER_RESET', () => {
    let customerOne = { _id: '1234', name: 'yooo', date: 'today'};
    let customerTwo = { _id: '1234', name: 'gruu', date: 'today'};

    let state = reducer([customerOne, customerTwo], {
      type: 'CUSTOMER_RESET',
    });

    expect(state.length).toEqual(0);
    expect(state[0]).toBeUndefined();
  });
});