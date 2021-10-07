import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing useForm', () => {
  const initialForm = { 
    name: 'Pati',
    email: 'pati@pati.com'
  };

  test('should return a default form', () => {

    const { result } = renderHook( () => useForm(initialForm) );
    const [ formValues, handleInputChange, reset ] = result.current;

    expect( formValues ).toEqual( initialForm );
    expect( typeof handleInputChange ).toBe( 'function' );
    expect( typeof reset ).toBe( 'function')
  });

  test('should change the name value in the form', () => {

    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange ] = result.current;

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      });
    });

    const [ formValues ] = result.current;
    expect( formValues ).toEqual( { ...initialForm, name: 'Melissa' });

  });

  test('should show the initialForm after reset', () => {
    
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange, reset ] = result.current;

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      });
      reset();
    });

    const [ formValues ] = result.current;
    expect( formValues ).toEqual( { ...initialForm });


  });
})