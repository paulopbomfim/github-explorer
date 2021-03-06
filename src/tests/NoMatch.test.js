import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './helper/renderWithRouter';

import { NoMatch } from '../pages/NoMatch';


describe('Test NoMatch page', () => {

  it('should render a status code 404', () => {
    renderWithRouter(<NoMatch />, { route: '/some-page-that-does-not-match' });
    
    const statusCode = screen.getByText(/404/);
    
    expect(statusCode.textContent).toMatch(/404/);
  })
  
  it('should render a message "Usuário não encontrado"', () => {
    renderWithRouter(<NoMatch />, { route: '/some-page-that-does-not-match' });
    
    const message = screen.getByText(/Usuário não encontrado/i);
    
    expect(message.textContent).toMatch(/Usuário não encontrado/);
  })
  
  it('should have a button "voltar"', () => {
    renderWithRouter(<NoMatch />, { route: '/some-page-that-does-not-match' });
    
    const backToHomeButton = screen.getByTestId('goBack');
    
    expect(backToHomeButton.textContent).toMatch(/voltar/i);
  })
});