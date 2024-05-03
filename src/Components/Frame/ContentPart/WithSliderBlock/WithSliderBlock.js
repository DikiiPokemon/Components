import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./WithSliderBlock.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.webp"
import img5 from "./images/5.jpg"



const WithSliderBlock = () => {

    const sliderVisibleParam = 3

    const ImagesArray = [
        img1,
        img2,
        img3,
        img4,
        img5
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1920, min: 1920 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1920, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className="SliderBlockWrapper">
            <Carousel
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                {
                    ImagesArray.map((i, index) => {
                        return(
                            <img key={index + "imageSlider"} src={i}/>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default WithSliderBlock