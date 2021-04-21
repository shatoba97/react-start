import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoItem from './ToDoItem';

describe('<ToDoItem />', () => {
  test('it should mount', () => {
    render(<ToDoItem />);
    
    const ToDoItem = screen.getByTestId('ToDoItem');

    expect(ToDoItem).toBeInTheDocument();
  });
});