import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CursorSpotlight from './components/CursorSpotlight'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <CursorSpotlight />
      <Sidebar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
