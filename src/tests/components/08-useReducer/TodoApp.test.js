import React from 'react';
import { shallow, mount } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';

describe('Testing <TodoApp />', () => {
  const wrapper =  shallow( <TodoApp />);

  Storage.prototype.setItem = jest.fn(()=> {});

  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should add a TODO', () => {
    const wrapper = mount( <TodoApp />);

    act( () => {
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1]);
    })

    expect( wrapper.find('h1').text().trim() ).toBe('Todo App ( 2 )');
    expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
  });
  
  test('should delete a TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
    wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

    expect( wrapper.find('h1').text().trim() ).toBe('Todo App ( 0 )');
  });

})