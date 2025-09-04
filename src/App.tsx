import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import Header from './components/layout/Header';
import { useEffect, useState } from 'react';

function App() {
  const [triedSilentSignIn, setTriedSilentSignIn] = useState(false);

  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isLoading && !isAuthenticated && !triedSilentSignIn) {
        setTriedSilentSignIn(true);
        try {
          await getAccessTokenSilently({
            timeoutInSeconds: 5, 
            cacheMode: "off"
          });
          console.log("Session found");
        } catch (error) {
          console.log("No existing session found: ", error);
        } finally {
          setTriedSilentSignIn(true);
        }
      } 
    };
    
    checkAuth();
  }, [isLoading, isAuthenticated, triedSilentSignIn, getAccessTokenSilently]);

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
