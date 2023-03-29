import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

it('test button render', () => {
  const obj = {
    value: '÷',
    class: 'orange-button',
    id: null,
  };

  render(<Button button={obj} handleClick={() => {}} />);
  const button = screen.getByRole('button');
  expect(button.innerHTML).toBe(obj.value);

  expect(button.className).toBe(obj.class);
  expect(button.id).toBeFalsy();
});
