import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomerForm from '../components/customer/customer-form/customer-form';
require('jest');

configure({ adapter: new Adapter() });

describe('<CustomerForm />', function () {
  describe('#shallow mounting', function () {
    beforeAll(() => this.wrapper = shallow(<CustomerForm />));
    afterAll(() => this.wrapper.unmount());

    it('should render a customer form component', () => {
      expect(this.wrapper.length).toEqual(1);
      expect(this.wrapper.find('.customer-form').length).toEqual(1);
    });
    it('should have a default state object with a name property assigned an empty string', () => {
      expect(this.wrapper.state().name).toEqual('');
    });
    it('should change the state object when form input is provided', () => {
      this.wrapper.find(`.customer-form input[name='name']`).simulate('change', { target: { name: 'name', value: 'hello' } });
      expect(this.wrapper.state().name).toEqual('hello');
    });
  });
});
