import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: false,
    user: null,
    isLoading: false,
  }),
}))

describe('Main page', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders website title in header', () => {
    expect(screen.getByRole('heading', { name: /TeaBee/i})).toBeInTheDocument();
  });
  it('renders interval timer text', () => {
    expect(screen.getByText(/Interval Timer/i)).toBeInTheDocument();
  });
});