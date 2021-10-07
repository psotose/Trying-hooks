import React from 'react'
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/todoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing <TodoListItem />', () => {
  
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow( 
    <TodoListItem
      todo={ demoTodos[0] }
      index={ 0 }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    /> 
  );

  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should call handleDelete function', () => {

    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('should call handleToggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith( demoTodos[0].id );
  });
  
  test('should show the correct text', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe(`1. ${ demoTodos[0].desc }`)
  });

  test('should have complete class if TODO.done = true', () => {
    
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow( 
      <TodoListItem
        todo={ todo }
      /> 
    );

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });

})