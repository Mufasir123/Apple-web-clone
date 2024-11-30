import Navbar from "./components/Navbar"
import Heros from "./components/Heros"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

function App() {
 

  return (
    <>
    <main className="bg-black">
      <Navbar></Navbar>
      <Heros></Heros>
      <Highlights></Highlights>
      <Model></Model>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </main>
    </>
  )
}

export default App; 
