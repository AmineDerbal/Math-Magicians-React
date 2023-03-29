import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

it('test Header rendering', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );
  screen.debug();
  const title = screen.getByRole('heading', { name: /Math Magicians/i });
  const navbars = screen.getAllByRole('link');
  expect(title.textContent).toBe('Math Magicians');
  expect(navbars).toHaveLength(3);
});
