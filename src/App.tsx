import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import Header from './components/layout/Header';
import { useEffect } from 'react';

function App() {

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        authorizationParams: {
          prompt: "none",
        },
      }).catch(() => {
        // No active Auth0 session
      });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    console.log(user?.name);
  } else {
    console.log("Not logged in");
  }

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-green-900 to-green-700">
        <p className="text-[clamp(1rem,4vw,3rem)] text-center px-5">Interval Timer</p>
        {/* All links here */}
        <div className="flex flex-col gap-5 justify-center w-full items-center">
          <a className="text-[clamp(1rem,4vw,3rem)] hover:text-green-600" href="https://teabee.org">TeaBee Hub</a>
        </div>
      </div>
    </div>
  )
}

export default App
