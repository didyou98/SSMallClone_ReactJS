import React, {useState} from 'react'
import './ContentSection.css'
import sectionImg1_1 from '../img/sectionImg1-1.jpg'
import sectionImg1_2 from '../img/sectionImg1-2.jpg'
import sectionImg1_3 from '../img/sectionImg1-3.jpg'
import sectionImg1_4 from '../img/sectionImg1-4.jpg'
import sectionImg1_5 from '../img/sectionImg1-5.jpg'
import sectionImg2_1 from '../img/sectionImg2-1.jpg'
import sectionImg2_2 from '../img/sectionImg2-2.jpg'
import sectionImg2_3 from '../img/sectionImg2-3.jpg'
import sectionImg2_4 from '../img/sectionImg2-4.jpg'
import sectionImg2_5 from '../img/sectionImg2-5.jpg'
import sectionImg2_6 from '../img/sectionImg2-6.jpg'
import sectionImg2_7 from '../img/sectionImg2-7.jpg'
import sectionImg2_8 from '../img/sectionImg2-8.jpg'
import sectionImg3_1 from '../img/sectionImg3-1.jpg'
import sectionImg3_2 from '../img/sectionImg3-2.jpg'
import sectionImg4_1 from '../img/sectionImg4-1.jpg'
import sectionImg4_2 from '../img/sectionImg4-2.jpg'
import sectionImg4_3 from '../img/sectionImg4-3.jpg'
import sectionImg5_1 from '../img/sectionImg5-1.jpg'
import sectionImg5_2 from '../img/sectionImg5-2.jpg'
import sectionImg5_3 from '../img/sectionImg5-3.jpg'
import sectionImg5_4 from '../img/sectionImg5-4.jpg'
import sectionImg5_5 from '../img/sectionImg5-5.jpg'
import sectionImg5_6 from '../img/sectionImg5-6.jpg'
import sectionImg5_7 from '../img/sectionImg5-7.jpg'
import sectionImg5_8 from '../img/sectionImg5-8.jpg'



function ContentSection() {
    const [tab, setTab] = useState(0);

    const onClickTab = (index) => {
        setTab(index);
    }

    return (
        <>
            <div className="content-container">
                <div className="contents">
                    <div className="content-tabs" >
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(0)}}>삼성TV위크</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(1)}}>셀렉트샵</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(2)}}>삼성케어플러스</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(3)}}>특별한혜택</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(4)}}>공동구매</button>
                        </div>
                    </div>
                    <div className="content-items-container" style={{transform:`translateX(-${tab}00%)`}}>
                        <div className="content-item content-item-first">
                            <div className="content-start">
                                <div className="content-img">
                                    <img src={sectionImg1_1} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg1_2} alt="sectionImg" />
                                </div>
                            </div>
                            <div className="content-middle">
                                <div className="content-img">
                                    <img src={sectionImg1_3} alt="sectionImg" />
                                </div>
                            </div>
                            <div className="content-end">
                                <div className="content-img">
                                    <img src={sectionImg1_4} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg1_5} alt="sectionImg" />
                                </div>
                            </div>
                        </div>
                        <div className="content-item content-item-second">
                            <div className="content-item-second-rows">
                                <div className="content-img">
                                    <img src={sectionImg2_1} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_2} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_3} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_4} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_5} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_6} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_7} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg2_8} alt="sectionImg" />
                                </div>
                            </div>
                        </div>
                        <div className="content-item content-item-third">
                            <div className="content-item-third-rows">
                                <div className="content-img">
                                    <img src={sectionImg3_1} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg3_2} alt="sectionImg" />
                                </div>
                            </div>
                        </div>
                        <div className="content-item content-item-fourth">
                            <div className="content-item-fourth-rows">
                                <div className="content-img">
                                    <img src={sectionImg4_1} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg4_2} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg4_3} alt="sectionImg" />
                                </div>
                            </div>
                        </div>
                        <div className="content-item content-item-fifth">
                            <div className="content-item-fifth-rows">
                                <div className="content-img">
                                    <img src={sectionImg5_1} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_2} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_3} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_4} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_5} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_6} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_7} alt="sectionImg" />
                                </div>
                                <div className="content-img">
                                    <img src={sectionImg5_8} alt="sectionImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>여기서부터 시작</div>
                </div>
            </div>
        </>
        
    )
}

export default ContentSection
