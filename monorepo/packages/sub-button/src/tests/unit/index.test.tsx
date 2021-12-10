import { render, screen } from '@testing-library/react';
import Page from '../../components';

test('renders learn react link', () => {
  render(<Page />);

  expect(screen.getByText('create-react-app')).toBeInTheDocument();
  expect(
    screen.getByText('this text does not exit'), // make test fail for demo
  ).toBeInTheDocument();
});
