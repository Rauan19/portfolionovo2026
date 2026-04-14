import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { TechStack } from './components/TechStack'
import { Testimonials } from './components/Testimonials'
import { WhatsAppFab } from './components/WhatsAppFab'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default App
