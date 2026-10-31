import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CursorSpotlight from './components/CursorSpotlight'
import Loader from './components/Loader'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [isReady, setIsReady] = useState(false)

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {!isReady ? (
          <Loader key="loader" onComplete={() => setIsReady(true)} />
        ) : (
          <motion.div key="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
