import React, {useState, useEffect, useRef} from 'react'
import './Slide.css';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {SlideItems} from './SlideItems';


function Slide(props) {

    const delay = 10000;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout()
    {
        if(timeoutRef){
            clearTimeout(timeoutRef.current)
        }
    }

    const nextSlide = () => {
        setIndex(index === SlideItems.length - 1 ? 0 : index + 1);
    }

    const prevSlide = () => {
        setIndex(index === 0 ? SlideItems.length - 1 : index - 1);
    }


    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex >= SlideItems.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);

    return (
        <div className="slideshow" >
            <FaAngleLeft className="left-arrow" onClick={prevSlide} size={48}/>
            <FaAngleRight className="right-arrow" onClick={nextSlide} size={48}/>
            <div className="slideshowSlider" style={
                {transform: `translate3d(${(-index) *  100 }%, 0, 0)`}
                }>
                
                {
                    SlideItems.map((item, index) => {
                        return (
                            <div className="slide" key={index}>
                                <img src={item.image} alt="banner image" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slide
