import React, {
  useContext,
  createContext,
  useState,
} from 'react';

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primary: {
      light: '#ffffff',
      normal: '#f97547',
      dark: '#1E1E1E',
      darker: '#d24d21',
    },
    secondary: {
      light: '#0c49a6',
      normal: '#012595',
      dark: '#2a2a65',
    },
    textcolor: {
      light: '#ffffff',
      dark: '#222222',
      black: 'black',
    },
    transparent: 'transparent',
    current: 'inherit',
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
