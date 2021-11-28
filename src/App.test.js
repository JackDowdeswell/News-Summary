import { render, screen } from '@testing-library/react';
import App from './App';
import HeadlineList from './HeadlineList';

test('renders DFA Github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Digital Futures Academy/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a headline through headline component', () => {
  render(<HeadlineList />);
  const testHeadline = screen.getByText(/Test Headline/i);
  expect(testHeadline).toBeInTheDocument();
})