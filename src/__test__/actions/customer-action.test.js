import * as actions from '../../actions/customer-actions';
import superagent from 'superagent';

describe('customer actions', () => {
  it('should create an action to get a customer', () => {
    let customer = {name: 'reddy', date: 'teddy'};
    let action = actions.customerGet(customer);

    expect(action.type).toEqual('CUSTOMER_GET');
    expect(action.payload).toHaveProperty('name');
    expect(action.payload).toHaveProperty('date');
  });
<<<<<<< HEAD

=======
>>>>>>> 423c5b8acf05ec238c2b8a7c28a0fe640ee3dc7c
  it('should create an action to pass customer Id returned form create', () => {
    let customer = {name: 'bye', date: '850'};
    let action = actions.customerPassIdAction(customer);

    expect(action.type).toEqual('CUSTOMER_ID_CREATE');
  });
  it('should create an action to update to a customer', () => {
    let customer = {name: 'bye', date: '850'};
    let action = actions.customerUpdate(customer);

    expect(action.type).toEqual('CUSTOMER_UPDATE');
    expect(action.payload.name).toEqual('bye');
    expect(action.payload.date).toEqual('850');
  });
  it('should create an action to delete a customer', () => {
    let customer = {name: 'bye', date: '850'};
    let action = actions.customerDelete(customer);

    expect(action.type).toEqual('CUSTOMER_DELETE');
    expect(action.payload.name).toBe('bye');
  });
  it('should create an action to reset customers', () => {
    let action = actions.customerReset();

    expect(action.type).toEqual('CUSTOMER_RESET');
  });
});
