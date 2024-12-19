import Hero from '@/components/hero'
import About from '@/components/about'
import Research from '@/components/research'
import Publications from '@/components/publications'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Research />
      <Publications />
      <Contact />
      <Footer />
    </div>
  )
}

