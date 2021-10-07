import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Testing <TodoList />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow( 
    <TodoList 
      todos={ demoTodos }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    /> 
  );

  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  test('should have 2 <TodoListItem />', () => {
    expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length);
    expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
  })

})
