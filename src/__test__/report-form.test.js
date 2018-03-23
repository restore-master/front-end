import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import createStore from '../lib/store';
import ReportForm from '../components/report/report-form/report-form';
require('jest');

configure({adapter: new Adapter()});

describe('<ReportForm />', function () {
  describe('#shallow mounting', function () {
    beforeAll(() => {
      let wrapper = shallow(<Provider store={createStore()}><ReportForm /></Provider>);
      wrapper.setProps({report: [
        {_id: '1234', source: 'yooo'},
        {_id: '5678', source: 'gruu'}]});
      this.wrapper = wrapper;
    });
    afterAll(() => this.wrapper.unmount());

    it('should render a report form component', () => {
      expect(this.wrapper.length).toEqual(1);
      expect(this.wrapper.find('.report-form').length).toEqual(0);
    });
  });
});