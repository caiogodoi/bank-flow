import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import useDashboard, { UseDashboard } from '../dashboard.hook';
import Dashboard from '../index';

const mockedValues: UseDashboard = {
  name: 'Fernando',
  balance: 51441.74,
  maskedBalance: '****',
  transactions: [
    {
      _id: "f21e64ed-36154398-ba03-9dff23128f4a",
      date: "2021-01-10T16:30:00-03:00",
      description: "PixIn: Peter Sagan",
      amount: "350.0"
    },
    {
      _id: "g22e64ed-44154398-ca02-hgff23128f4a",
      date: "2021-01-11T13:03:00-03:00",
      description: "Uber",
      amount: "-7.49"
    },
    {
      _id: "h21e64ed-88994398-bb99-9dff23128f4a",
      date: "2021-01-11T20:15:00-03:00",
      description: "iFood",
      amount: "-35.0"
    },
    {
      _id: "033e64ed-23154398-ad22-9dff23128f4a",
      date: "2021-01-12T16:30:00-03:00",
      description: "Apple.com",
      amount: "-10.9"
    },
    {
      _id: "z55e64ed-89154398-xz02-9dff23128f4a",
      date: "2021-01-12T18:01:00-03:00",
      description: "Amazon Prime",
      amount: "-9.9"
    }
  ],
  isAmountVisible: true,
  toggleAmountVisibility: jest.fn(),
  toggleReduceTransactions: jest.fn(),
};

jest.mock('../dashboard.hook', () => jest.fn(() => mockedValues));

describe('render', () => {
  it('render default values', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText('Welcome Fernando')).toBeDefined();
    expect(getByText('$ 51441.74')).toBeDefined();
    expect(getByText('Transactions')).toBeDefined();
    expect(getByText('1/10/2021')).toBeDefined();
    expect(getByText('PixIn: Peter Sagan')).toBeDefined();
    expect(getByText('$ 350.0')).toBeDefined();
  });

  it('disable amount visibility', () => {
    (useDashboard as jest.Mock).mockImplementation(() => ({
      ...mockedValues,
      isAmountVisible: false,
    }));
    const { getByText } = render(<Dashboard />);

    expect(getByText('Welcome Fernando')).toBeDefined();
    expect(getByText('$ ****')).toBeDefined();
    expect(getByText('Transactions')).toBeDefined();
    expect(getByText('1/10/2021')).toBeDefined();
    expect(getByText('PixIn: Peter Sagan')).toBeDefined();
    expect(getByText('$ 350.0')).toBeDefined();
  });
});
