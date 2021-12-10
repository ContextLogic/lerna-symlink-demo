import { render, screen } from '@testing-library/react';
import Page from '../../components';

test('renders learn react link', () => {
  render(<Page />);

  expect(screen.getByText('create-react-app')).toBeInTheDocument();
  expect(
    screen.getByText('template for use in Lerna monorepo'),
  ).toBeInTheDocument();
});
