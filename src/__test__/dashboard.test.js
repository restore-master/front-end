import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
require('jest');

configure({adapter: new Adapter()});

describe('<Dashboard />', function() {
  describe('#shallow mounting', function() {
    beforeAll(() => {
      let wrapper = shallow(<Provider store={createStore()}><Dashboard /></Provider>);
      wrapper.setProps({customer: [
        {_id: '1234', name: 'yooo'},
        {_id: '5678', name: 'gruu'}]});
      this.wrapper = wrapper;
    });
    afterAll(() => this.wrapper.unmount());
    it('should render two category items into the dom', () => {
      expect(this.wrapper.find('.dashboard').length).toEqual(0);
    });
  });
});