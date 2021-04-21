import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListContainer from './ListContainer';

describe('<ListContainer />', () => {
  test('it should mount', () => {
    render(<ListContainer />);
    
    const listContainer = screen.getByTestId('ListContainer');

    expect(listContainer).toBeInTheDocument();
  });
});