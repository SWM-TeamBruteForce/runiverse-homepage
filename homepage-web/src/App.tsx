import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Music from './sections/Music'
import Team from './sections/Team'
import CallToAction from './sections/CallToAction'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Music />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
