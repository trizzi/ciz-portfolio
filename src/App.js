import './App.css';

import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  return (
    <div
      className='overflow-x-hidden'
      style={{
        color: theme.textcolor.light,
        background: theme.primary.dark,
      }}>
      <h1>Hi! Testing</h1>
    </div>
  );
}

export default App;
