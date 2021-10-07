import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Testing <LoginScreen />', () => {

  const setUser = jest.fn();

  const wrapper = mount( 
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );  
  
  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should execute setUser with the expected arguments', () => {

    wrapper.find('button').prop('onClick')();

    expect( setUser ).toHaveBeenCalledWith({
      id: 123,
      name: 'Patricia'
    })
  });
})