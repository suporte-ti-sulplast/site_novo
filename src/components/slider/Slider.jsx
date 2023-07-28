import "./index.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (

    <div className='Slider'>

        <Carousel fade>
            <Carousel.Item interval={4000}>
            <img
                src="./images/slider01.png"
                alt="One"
            />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
            <img
                src="./images/slider02.png"
                alt="Two"
            />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
            <img
                src="./images/slider03.png"
                alt="Three"
            />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
            <img
                src="./images/slider04.png"
                alt="Four"
            />
            </Carousel.Item>
      </Carousel>
        
    </div>
  )
}

export default Slider