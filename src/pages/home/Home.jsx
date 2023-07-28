import "./index.scss"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Slider from "../../components/slider/Slider"
import About from "../../components/about/About"
import Cards from "../../components/cards/Cards"

function Home() {
  return (

    <div className='Home'>
        <Header />
        <Navbar />
        <Slider />
        <About />
        <Cards />
    </div>

  )
}

export default Home