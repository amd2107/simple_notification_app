import { render, screen } from '@testing-library/react';
import LatestLogsComponents from './NavBarComponent';

test('renders learn react link', () => {
  render(<LatestLogsComponents />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
