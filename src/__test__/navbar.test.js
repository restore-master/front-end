import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../components/navbar/navbar';
require('jest');

configure({adapter: new Adapter()});

describe('<Navbar />', function() {
  describe('#shallow mounting', function() {
    beforeAll(() => this.wrapper = shallow(<Navbar/>));
    afterAll(() => this.wrapper.unmount());

    it('should render a navbar into dom', () => {
      expect(this.wrapper.find('.nav-bar').length).toEqual(1);
    });
    it('should render 4 nav items into the dom', () => {
      expect(this.wrapper.find('.nav-bar li').length).toEqual(4);
    });
  });
});