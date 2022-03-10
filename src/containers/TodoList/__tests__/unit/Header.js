import React from 'react';
import Header from '../../components/Header.js';
import { shallow } from 'enzyme';
import { findTestWrapper } from '../../../../utils/testUtils.js';

test('Header snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('Component Header should contain an input box', () => {
  const wrapper = shallow(<Header />);
  const inputElement = findTestWrapper(wrapper, 'input-box');
  expect(inputElement.length).toBe(1);
});

test('The original value of input box shoule be empty', () => {
  const wrapper = shallow(<Header />);
  const inputElement = findTestWrapper(wrapper, 'input-box');
  expect(inputElement.prop('value')).toEqual('');
});

test('When user inputs a new value, the value of input box changes too', () => {
  const wrapper = shallow(<Header />);
  const inputElement = findTestWrapper(wrapper, 'input-box');
  inputElement.simulate('change', {
    target: { value: 'Learn Jest' }
  });
  expect(wrapper.state('value')).toEqual('Learn Jest');
});

test('When user presses enter, if the value of input box is invalid, do nothing', () => {
  // When user presses enter, a function (addUndoItem) delivered by Component TodoList will be called, new data will be added to Component TodoList
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElement = findTestWrapper(wrapper, 'input-box');
  wrapper.setState({ value: '' });
  inputElement.simulate('keyUp', {
    keyCode: 13
  });
  expect(fn).not.toHaveBeenCalled();
});

test('When user presses enter, if the value of input box is valid, function should be called', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElement = findTestWrapper(wrapper, 'input-box');
  wrapper.setState({ value: 'Learn Jest' });
  inputElement.simulate('keyUp', {
    keyCode: 13
  });
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith('Learn Jest');
});

test('When user presses enter, if the value of input box is valid, clear input box after adding new data to undoList', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElement = findTestWrapper(wrapper, 'input-box');
  wrapper.setState({ value: 'Learn Jest' });
  inputElement.simulate('keyUp', {
    keyCode: 13
  });
  const newInputElement = findTestWrapper(wrapper, 'input-box');
  expect(newInputElement.prop('value')).toBe('');
});
