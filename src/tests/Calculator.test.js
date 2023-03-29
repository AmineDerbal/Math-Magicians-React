import { render, screen, queryByAttribute } from '@testing-library/react';
import Calculator from '../components/Calculator';

const getById = queryByAttribute.bind(null, 'id');

it('test Caclculator componenet rendering', () => {
  const dom = render(<Calculator />);
  const buttons = screen.getAllByRole('button');
  const value = getById(dom.container, 'bottom-value');
  expect(buttons).toHaveLength(19);
  expect(value.textContent).toBe('0');
});
