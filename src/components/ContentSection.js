import React from 'react'
import './ContentSection.css'
import sectionImg1_1 from '../img/sectionImg1-1.jpg'
import sectionImg1_2 from '../img/sectionImg1-2.jpg'
import sectionImg1_3 from '../img/sectionImg1-3.jpg'
import sectionImg1_4 from '../img/sectionImg1-4.jpg'
import sectionImg1_5 from '../img/sectionImg1-5.jpg'


function ContentSection() {
    return (
        <div className="section">
            <div className="item-slides">
                    <div className="item-slide">삼성Galaxy위크</div>
                    <div className="item-slide">셀렉트샵</div>
                    <div className="item-slide">삼성케어플러스</div>
                    <div className="item-slide">특별한 혜택</div>
                    <div className="item-slide">공동구매</div>
                </div>
            <div className="section-container">
                <div className="item">
                    <img src={sectionImg1_1} alt="" />
                </div>
                <div className="item">
                    <img src={sectionImg1_2} alt="" />
                </div>
                <div className="item-center">
                    <img src={sectionImg1_3} alt="" />
                </div>
                <div className="item">
                    <img src={sectionImg1_4} alt="" />
                </div>
                <div className="item">
                    <img src={sectionImg1_5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContentSection
