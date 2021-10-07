import React from 'react';
import { mount} from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Testing <HomeScreen />', () => {

  const user = {
    name: 'Patito',
    email: 'pati@pati.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
    );
  
  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  })
})