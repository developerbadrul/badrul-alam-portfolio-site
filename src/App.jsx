import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Container from "./components/Container/Container"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Container>
        <Services></Services>
      </Container>
      <About></About>
      <Container>
        <Works></Works>
      </Container>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
