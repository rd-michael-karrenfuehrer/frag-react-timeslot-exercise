import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


it('renders application header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').exists()).toBe(true);
});
