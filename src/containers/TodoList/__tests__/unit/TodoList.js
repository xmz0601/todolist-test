import React from 'react';
import TodoList from '../../index.js';
import { shallow } from 'enzyme';

test('The original value of undoList shoule be empty', () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state('undoList')).toEqual([]);
});

test('Component TodoList should deliver a function (addUndoItem) to Component Header', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem);
});

test('When user presses enter in input box, new data should be added to undoList', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  // it's unnecessary to simulate enter event in unit test
  // enter event means call addUndoItem function in Component Header
  const addFunc = Header.prop('addUndoItem');
  addFunc('Learn Jest');
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')[0]).toBe('Learn Jest');
});
