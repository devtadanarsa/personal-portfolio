import { createContext, FC, ReactNode, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const defaultValue: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {
    console.warn("toggleTheme is not provided");
  },
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
