import * as actions from '../../actions/report-actions';
require('jest');

describe('report actions', () => {
  it('should create a report get action', () => {
    let report = {source: 'hello world', customer: 'customer'};
    let action = actions.reportGet(report);

    expect(action.type).toEqual('REPORT_GET');
    expect(action.payload).toHaveProperty('source');
    expect(action.payload).toHaveProperty('customer');
  });
  it('should create and pass report action', () => {
    let report = {source: 'hello world', customer: 'customer'};
    let action = actions.reportPassIdAction(report);

    expect(action.type).toEqual('REPORT_ID_CREATE');
    expect(action.payload).toHaveProperty('source');
    expect(action.payload).toHaveProperty('customer');
  });

  it('should create an update action for report', () => {
    let report = {source: 'bye world', customer: 'customer'};
    let action = actions.reportUpdate(report);

    expect(action.type).toEqual('REPORT_UPDATE');
    expect(action.payload.source).toBe('bye world');
  });

  it('should create a delete action for report', () => {
    let report = {source: 'bye world', customer: 'customer'};
    let action = actions.reportDelete(report);

    expect(action.type).toEqual('REPORT_DELETE');
    expect(action.payload.source).toBe('bye world');
  });

  it('should create a reset action for report', () => {
    let report = {source: 'bye world', customer: 'customer'};
    let action = actions.reportDelete(report);

    expect(action.type).toEqual('REPORT_DELETE');
    expect(action.payload.source).toBe('bye world');
  });
});