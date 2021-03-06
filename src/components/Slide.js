import React, {useState, useEffect, useRef} from 'react'
import './Slide.scss';
import {SlideItems} from './SlideItems';


function Slide() {
    const [slide, setSlide] = useState(0);
    const onNextSlide = () => {
        if(slide < 4)
        {
            setSlide(slide + 1);
        }
        else
        {
            setSlide(0);
        }
    }

    const onPrevSlide = () => {
        if(slide <= 0)
        {
            setSlide(slide + 4); 
        }
        else
        {
            setSlide(slide - 1);
        }
    }
    const slideLen = SlideItems.length;
    return (
        <div className="scene" >
            <span className="prev" onClick={onPrevSlide}>&lang;</span>
            <span className="next" onClick={onNextSlide}>&rang;</span>
            <div className="slider" style={{transform: `translate(-${slide}00%)`}}>
                <div className="slideItem">
                    <img src={SlideItems[0].image} alt="" />
                    <div className="inner-contents">
                        <div className="box-title">
                            <h1>삼성 TV 위크</h1>
                            <p>삼성의 발자취와 함께 올해 가장 사랑받은<br/>
                            TV 제품들을 특별한 공동구매로 만나보세요</p>
                        </div>
                        <div className="box-btns">
                            <button className="btn-underline">구매 혜택 보기</button>
                            <button className="btn-round">공동 구매하기</button>
                        </div>
                    </div>
                </div>
                <div className="slideItem">
                    <img src={SlideItems[1].image} alt="" />
                </div>
                <div className="slideItem">
                    <img src={SlideItems[2].image} alt="" />
                </div>
                <div className="slideItem">
                    <img src={SlideItems[3].image} alt="" />
                </div>
                <div className="slideItem">
                    <img src={SlideItems[4].image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slide
