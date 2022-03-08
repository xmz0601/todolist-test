import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const container = wrapper.find('[data-test="app-container"]');
  // console.log(wrapper.debug());
  // expect(container.length).toBe(1);
  // expect(container.prop('title')).toBe('test');
  expect(container).toExist();
  expect(container).toHaveProp('title', 'test');
});
