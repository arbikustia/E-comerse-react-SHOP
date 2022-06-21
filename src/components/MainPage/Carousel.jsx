import './Home.css'
import { Carousel, } from 'react-bootstrap'
import Sdata from './Sdata'



const Slider = () => {

    const data = JSON.stringify(Sdata)
    const dataSlide = JSON.parse(data)



    return (
        <Carousel variant="dark" className='slider-wraper'>
            <Carousel.Item className='slide'>
                <img
                    className="d-block"
                    src={dataSlide[1].cover}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>{dataSlide[0].title}</h5>
                    <p>{dataSlide[0].desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block "
                    src={dataSlide[0].cover}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>{dataSlide[1].title}</h5>
                    <p>{dataSlide[1].desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block"
                    src={dataSlide[2].cover}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>{dataSlide[2].title}</h5>
                    <p>{dataSlide[2].desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider