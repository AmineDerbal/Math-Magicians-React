import { render, queryByAttribute } from '@testing-library/react';
import Screen from '../components/Screen';

const getById = queryByAttribute.bind(null, 'id');

it('test Screen render', () => {
  const dom = render(<Screen result="0" />);
  const value = getById(dom.container, 'bottom-value');
  expect(value.textContent).toBe('0');
});
