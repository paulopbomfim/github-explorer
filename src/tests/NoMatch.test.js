import React from 'react';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/user-event'
import { location } from 'react-router-dom';
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
  
  it('should have a button "voltar" that sends to home', () => {
    renderWithRouter(<NoMatch />, { route: '/some-page-that-does-not-match' });
    
    const backToHomeButton = screen.getByTestId('goBack');
    
    expect(backToHomeButton.textContent).toMatch(/voltar/);
    
    fireEvent.click(backToHomeButton);
    
    const pathName = location.pathname;
    const title = screen.getByText(/Explore repositórios no Github\./i);
    
    expect(pathName).toBe('/');
    expect(title.textContent).toBe('Explore repositórios no Github.');
  })
});