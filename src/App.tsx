import './App.css'
import Header from './components/layout/Header';
import useDarkMode from './hooks/useDarkMode';

function App() {

  const [isDark, setIsDark] = useDarkMode();  
  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-300 text-black dark:bg-gray-900 dark:text-white">
      <Header isDark={isDark} setIsDark={setIsDark}/>
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        
      </div>
    </div>
  )
}

export default App
