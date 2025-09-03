import { render, screen, waitFor, act } from '@testing-library/react'
import App from './App'

// Mock the @auth0/auth0-react module
vi.mock("@auth0/auth0-react", () => {
  return {
    Auth0Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useAuth0: () => ({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      getAccessTokenSilently: vi.fn().mockResolvedValue(undefined), // 👈 return a Promise
      logout: vi.fn().mockResolvedValue(undefined),
    }),
  };
});

describe('Main page', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });
  });
  it('renders website title in header', () => {
    expect(screen.getByRole('heading', { name: /TeaBee/i})).toBeInTheDocument();
  });
  it('renders interval timer text', () => {
    expect(screen.getByText(/Interval Timer/i)).toBeInTheDocument();
  });
});