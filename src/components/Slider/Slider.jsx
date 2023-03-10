import React, { useState } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import "./Slider.scss"
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

const data = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",

]

const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev -1)
}

const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1)
}


return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
               <ArrowBackIosNewRoundedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
            <ArrowForwardIosRoundedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider