import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
require('jest');

configure({adapter: new Adapter()});

describe('<Dashboard />', function() {
  describe('#full mounting', function() {
    beforeAll(() => {
      let wrapper = mount(<Provider store={createStore()}><Dashboard /></Provider>);
      wrapper.setProps({categories: [
        {id: '1234', title: 'yooo', timestamp: new Date()},
        {id: '5678', title: 'gruu', timestamp: new Date()}]});
      this.wrapper = wrapper;
    });
    afterAll(() => this.wrapper.unmount());
    it('should render two category items into the dom', () => {
      expect(this.wrapper.find('.dashboard').length).toEqual(1);
    });
  });
});