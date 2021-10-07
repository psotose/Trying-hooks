import React from 'react'
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Testing <HookApp />', () => {
  test('should be render correctly', () => {
    const wrapper =  shallow(<HookApp />);
    expect ( wrapper ).toMatchSnapshot();
  })
}) 