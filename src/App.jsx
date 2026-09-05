import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import CursorSpotlight from './components/CursorSpotlight'
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loaderDone && (
          <Loader key="loader" onComplete={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

      <a href="#about" className="bc-skip">
        Skip to Content
      </a>

      <CursorSpotlight />

      <div className="bc-layout">
        <Sidebar />
        <main className="bc-main">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
