import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('test navbar render', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const navbars = screen.getAllByRole('link');
  expect(navbars).toHaveLength(3);
});
