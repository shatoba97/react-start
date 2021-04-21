import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DescriptionContainer from './DescriptionContainer';

describe('<DescriptionContainer />', () => {
  test('it should mount', () => {
    render(<DescriptionContainer />);
    
    const descriptionContainer = screen.getByTestId('DescriptionContainer');

    expect(descriptionContainer).toBeInTheDocument();
  });
});