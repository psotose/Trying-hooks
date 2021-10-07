import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Testing <MultipleCustomHooks />', () => {

  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  });

  test('should be render correctly', () => {

    useFetch.mockReturnValue({
      data: null, 
      loading: true, 
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('should show info', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Patito',
        quote: 'Hola Mundo'
      }], 
      loading: false, 
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper.find('.alert').exists() ).toBe( false );
    expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' );
    expect( wrapper.find('footer').text().trim() ).toBe( 'Patito' );
    
  })
});