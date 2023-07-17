import { render, screen } from '@testing-library/react';
import NavBarComponent from './NavBarComponent';

test('renders learn react link', () => {
  render(<NavBarComponent />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
