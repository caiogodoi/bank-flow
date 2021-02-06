import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { UseWelcome } from '../welcome.hook';
import Welcome from '../index';

const mockedValues: UseWelcome = {
  navigateToDashboard: jest.fn()
};

jest.mock('../welcome.hook', () => jest.fn(() => mockedValues));

describe('render', () => {
  it('render default values', () => {
    const { getByText } = render(<Welcome />);
    expect(getByText('Welcome to Bank Flow')).toBeDefined();
  });

  describe('actions', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('press navigate to dashboard', () => {
      const { getByText } = render(<Welcome />);
      fireEvent.press(getByText('Dashboard'));
      expect(mockedValues.navigateToDashboard).toBeCalledTimes(1);
    });
  });
});
