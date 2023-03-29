import { render } from '@testing-library/react';
import Loader from '../components/loader';

it('test loader render', () => {
  const { container } = render(<Loader />);
  expect(container.firstChild.classList.contains('lds-ring')).toBe(true);
  expect(container.getElementsByClassName('lds-ring').length).toBe(1);
});
