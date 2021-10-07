import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing <TodoAdd />', () => {

  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd 
      handleAddTodo= { handleAddTodo }
    />
  )
  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should not call handleAddTodo', () => {

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect( handleAddTodo ).toHaveBeenCalledTimes(0);
  });

  test('should call handleAddTodo function', () => {

    const value = 'Learn React';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });
    expect( handleAddTodo ).toHaveBeenCalledTimes(1);

    expect( handleAddTodo ).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });
    //esta para evaluar que se ejecuta el reset
    expect( wrapper.find('input').prop('value') ).toBe('');
  });

});