import { render } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

test('Render App', () => {
  render(<AuthContextProvider><App /></AuthContextProvider>);
});
