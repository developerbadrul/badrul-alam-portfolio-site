import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Container from "./components/Container/Container"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Hero></Hero>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
