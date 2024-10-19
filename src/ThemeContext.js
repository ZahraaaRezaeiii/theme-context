import { useContext, createContext, useState } from "react";

const themeContext = createContext();

const useTheme = () => {
    return useContext(themeContext)}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        {theme === "light" ? setTheme("dark") : setTheme("light")}
    }

    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children} 
        </themeContext.Provider>
    );
    
} 

export {ThemeProvider, useTheme}