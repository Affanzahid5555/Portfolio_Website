import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const getInitialMode = () => {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('portfolio-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'light'
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode)
  const isDark = mode === 'dark'

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('portfolio-theme', mode)
    document.documentElement.setAttribute('data-theme', mode)
    document.body.style.background = ''
    document.body.style.color = ''
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, isDark, toggleTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export default ThemeContext
