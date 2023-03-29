import { render, queryByAttribute } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Screen from '../components/Screen';

const getById = queryByAttribute.bind(null, 'id');

it('test Screen render', () => {
  const dom = render(<Screen result="0" />);
  const tree = renderer.create(<Screen result="0" />).toJSON();
  const value = getById(dom.container, 'bottom-value');
  expect(value.textContent).toBe('0');
  expect(tree).toMatchSnapshot();
});
