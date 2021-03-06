import React, {useState, useRef} from 'react'
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
import section2Img1 from '../img/section2Img1.jpg';
import section2Img2 from '../img/section2Img2.jpg';
import section2Img3 from '../img/section2Img3.jpg';
import section2Img4 from '../img/section2Img4.jpg';
import section2Img5 from '../img/section2Img5.jpg';
import section3Img1 from '../img/section3Img1.jpg';
import section3Img2 from '../img/section3Img2.jpg';
import section3Img3 from '../img/section3Img3.jpg';
import section3Img4 from '../img/section3Img4.jpg';
import section3Img5 from '../img/section3Img5.jpg';
import section3Img6 from '../img/section3Img6.jpg';
import section3Img7 from '../img/section3Img7.jpg';
import section4Img1 from '../img/section4Img1.jpg';
import section4Img2 from '../img/section4Img2.jpg';
import section4Img3 from '../img/section4Img3.jpg';
import section4Img4 from '../img/section4Img4.jpg';
import section4Img5 from '../img/section4Img5.jpg';
import section4Img6 from '../img/section4Img6.jpg';
import sectionbox4item1 from '../img/section-box4-item1.jpg';
import sectionbox4item2 from '../img/section-box4-item2.jpg';
import sectionbox4item3 from '../img/section-box4-item3.jpg';
import sectionbox4item4 from '../img/section-box4-item4.jpg';
import sectionbox5item1 from '../img/section-box5-item1.jpg';
import sectionbox5item2 from '../img/section-box5-item2.jpg';
import sectionbox5item3 from '../img/section-box5-item3.jpg';
import sectionbox5item4 from '../img/section-box5-item4.jpg';
import sectionbox5item5 from '../img/section-box5-item5.jpg';
import sectionbox5item6 from '../img/section-box5-item6.jpg';



function ContentSection() {
    const [colorAcive, setColorActive] = useState(false);

    const [colorAcive2, setColorActive2] = useState(false);

    const [colorAcive3, setColorActive3] = useState(false);

    const [tab, setTab] = useState(0);

    const btnColor =  colorAcive || colorAcive2 || colorAcive3 ? {backgroundColor:"white", color:"black"} : {backgroundColor:"black", color:"white"}
    const underLineWhite = {
        marginRight:"5px",
        padding:"0px 5px",
        borderRadius: "0px",
        borderBottom:"2px solid white",
        backgroundColor : "transparent",
        lineHeight:"20px"
    }

    const underLineBlack = {
        marginRight:"5px",
        padding:"0px 5px",
        borderRadius: "0px",
        borderBottom:"2px solid black",
        backgroundColor : "transparent",
        color:"black",
        lineHeight:"20px"
    }

    const onClickTab = (index) => {
        setTab(index);
    }

    const [sectionTab2, setSectionTab2] = useState(0);
    const onClickTab2 = (index) => {
        setSectionTab2(index);
    }

    const [sectionTab3, setSectionTab3] = useState(0);
    const onClickTab3 = (index) => {
        setSectionTab3(index);
    }

    const [sectionTab4, setSectionTab4] = useState(0);
    const onClickTab4 = (index) => {
        setSectionTab4(index);
    }

    const [story, setStroy] = useState([true, false, false, false]);
    const [storyTab, setStroyTab] = useState(0);
    const newStroy = [...story]
    const onStroyEnter = (index) => {
        newStroy[index] = true;
        setStroy(newStroy);
    }
    const onStroyLeave = (index) => {
        newStroy[index] = false;
        setStroy(newStroy);
    }
    const onStoryTab = (index) => {
        setStroyTab(index);
    }

    const scrollToTop = () =>{
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className="content-container">
                <div className="contents">
                    <div className="content-tabs" >
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(0)}}>??????TV??????</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(1)}}>????????????</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(2)}}>?????????????????????</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(3)}}>???????????????</button>
                        </div>
                        <div className="cotent-tab-title">
                            <button onClick={() => {onClickTab(4)}}>????????????</button>
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
                    <div className="contents-section-box2-container" style={colorAcive ? {color:"white"} : {color:"black"}}>
                        <div className="cotent-section-box2-main-title">
                            <h2>??????</h2>
                        </div>
                        <div className="content-section-box2-tabs">
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(0); setColorActive(false)}}>?????? ??????</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(1); setColorActive(false)}}>BESPOKE ???????????????</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(2); setColorActive(false)}}>BESPOKE HOME</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(3); setColorActive(true)}}>???????????????</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(4); setColorActive(true)}}>????????? ?????????</button>
                            </div>
                        </div>
                        <div className="contents-section-box-slider">
                            <div className="contents-section-box2-bg">
                                <div className="contents-section-box2-items" style={{transform:`translateX(-${sectionTab2}00%)`}}>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img1} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>?????? ?????? ?????????! ????????????</h1>
                                            <p>?????? ?????????, ?????? ?????? ?????? 354?????? ??????!</p>
                                            <button>?????? ????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img2} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>2022 BESPOKE ???????????????</h1>
                                            <p>????????? ????????? ????????? ????????? BESPOKE ???????????????</p>
                                            <button>??????????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img3} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>BESPOKE HOME</h1>
                                            <p>???????????? ??????????????????</p>
                                            <button style={underLineBlack}>360 ?????? ????????????</button>
                                            <button>??? ????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img4} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>???????????????</h1>
                                            <p>????????? ????????????</p>
                                            <button style={underLineWhite}>?????? ?????? ??????</button>
                                            <button style={btnColor}>???????????? ????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img5} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box2-item-text">
                                            <h1>BESPOKE ????????? ??????</h1>
                                            <p>??? ????????? ?????? BESPOKE??? ????????? ????????? ?????? ?????????!</p>
                                            <button style={btnColor}>BESPOKE ????????????</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contents-section-box3-container" style={colorAcive2 ? {color:"white"} : {color:"black"}}>
                        <div className="cotent-section-box3-main-title">
                            <h2>?????????&amp;PC</h2>
                        </div>
                        <div className="content-section-box3-tabs">
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(0); setColorActive2(false)}}>?????? ??????</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(1); setColorActive2(false)}}>Galaxy Z Flip3 5G</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(2); setColorActive2(false)}}>Galaxy Unpacked</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(3); setColorActive2(false)}}>????????? ????????? ?????????</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(4); setColorActive2(false)}}>Galaxy Book</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(5); setColorActive2(false)}}>????????? ????????????</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(6); setColorActive2(true)}}>????????? ?????????</button>
                            </div>
                        </div>
                        <div className="contents-section-box-slider">
                            <div className="contents-section-box3-bg">
                                <div className="contents-section-box3-items" style={{transform:`translateX(-${sectionTab3}00%)`}}>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img1} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Z FOLD3 5G</h1>
                                            <p>????????? Z ??????3??? ?????? ?????? ??? ?????????<br /> ????????? ???????????? ???????????? ???????????????</p>
                                            <p></p>
                                            <button style={underLineBlack} className='btn'>??? ????????????</button>
                                            <button className="btn">?????? ????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img2} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Z Flip3 5G</h1>
                                            <button style={underLineBlack} className="btn">??? ????????????</button>
                                            <button className="btn">?????? ?????? ??????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img3} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Unpacked<br/>Part2 ????????????</h1>
                                            <button className="btn">??????????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img4} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>????????? ????????? ?????????</h1>
                                            <p>?????????, ??????????????? ?????? ??????, ???????????? ??????<br/>?????? ?????? ???????????? ???????????????!</p>
                                            <button className="btn">??? ????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section3Img5} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Book Academy</h1>
                                            <p>Windows11??? ????????? ?????? ???????????? ???????????? ????????? ??????<br/>???????????? ?????? ???????????? ???????????????</p>
                                            <button className="btn">?????? ?????? ??????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img6} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>????????? ????????????</h1>
                                            <p>???????????? ????????? ????????? ????????? ????????? ?????????</p>
                                            <button className="btn">????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item ">
                                        <img src={section3Img7} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>????????? ????????? ?????????</h1>
                                            <p>???????????? ????????? ?????? ????????? ??? ??????<br/>????????? Z?????? ??????4, ??????2??????, ?????? ?????? ?????????.</p>
                                            <button style={btnColor} className="btn">????????????</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contents-section-box3-container" style={colorAcive3 ? {color:"white"} : {color:"black"}}>
                        <div className="cotent-section-box3-main-title">
                            <h2>TV&amp;?????????</h2>
                        </div>
                        <div className="content-section-box3-tabs">
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(0); setColorActive3(false)}}>?????? ??????</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(1); setColorActive3(false)}}>Lifestyle TV</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(2); setColorActive3(true)}}>The Premiere</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(3); setColorActive3(true)}}>MICRO LED</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(4); setColorActive3(true)}}>RADIANCE 2400</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(5); setColorActive3(true)}}>????????? ?????????</button>
                            </div>
                        </div>
                        <div className="contents-section-box-slider">
                            <div className="contents-section-box3-bg">
                                <div className="contents-section-box3-items" style={{transform:`translateX(-${sectionTab4}00%)`}}>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img1} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>TV ????????? ??????</h1>
                                            <p>?????? ?????? ?????????!<br />?????????????????? ????????? TV?????? ?????????????????? ????????? ?????????</p>
                                            <p></p>
                                            <button style={underLineBlack} className="btn">?????? ?????? ??????</button>
                                            <button className="btn">?????? ????????????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img2} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>TV??? ??????, The ?????????</h1>
                                            <p>????????? Lifestyle TV??? ??? ?????? TV??? ???????????????</p>
                                            <button style={underLineBlack} className="btn">??? ????????????</button>
                                            <button className="btn">?????? ?????? ??????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img3} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>???????????? ?????? ???????????? ???</h1>
                                            <p>??????????????? ??? ??????????????? <br/>4k ???????????? ????????? ????????? ????????????</p>
                                            <button className="btn" style={underLineWhite}>??? ????????????</button>
                                            <button className="btn" style={btnColor}>??? ?????? ?????? ??????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img4} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <p>Born to be incomparable</p>
                                            <h1>MICRO LED</h1>
                                            <p>????????? ?????? ?????????<br/>????????? ?????? ????????? ??????????????????</p>
                                            <button className="btn" style={underLineWhite}>????????? ??????</button>
                                            <button className="btn" style={btnColor}>?????? ??????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section4Img5} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>???????????? RADIANCE 2400 ??????</h1>
                                            <p>50?????? ?????? ???????????? ?????? ??????????????? 3??? ????????????</p>
                                            <button className="btn" style={btnColor}>?????? ?????? ??????</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img6} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>?????? ?????? ?????? ?????? '????????? ?????????'</h1>
                                            <p>????????? ???????????? ????????? ????????? ????????? ?????????</p>
                                            <button className="btn" style={btnColor}>????????????</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-section-box4-container">
                        <div className="content-section-box4-items">
                            <div className="content-section-box4-head">
                                <h1>?????????</h1>
                                <p>????????? ?????? ???????????? ?????? ????????? ???????????? <br/>??????????????? ?????? ????????? ????????? ???????????????.</p>
                            </div>

                            <div className="content-section-box4-slide">
                                <div className="content-section-box4-slider" style={{transform:`translateX(-${storyTab}00%`}}>
                                    <div className="content-section-box4-slider-item">
                                        <img src={sectionbox4item1} alt="" />
                                    </div>
                                    <div className="content-section-box4-slider-item">
                                        <img src={sectionbox4item2} alt="" />
                                    </div>
                                    <div className="content-section-box4-slider-item">
                                        <img src={sectionbox4item3} alt="" />
                                    </div>
                                    <div className="content-section-box4-slider-item">
                                        <img src={sectionbox4item4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="content-section-box4-titles">
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(0)}} onMouseEnter={() => {onStroyEnter(0); onStoryTab(0)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">01</span><span className="span-text">?????? ???????????? ?????? ????????? ????????? ??????</span>
                                    {console.log(story[0])}
                                    {story[0] ? <More /> : null}
                                </div>
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(1)}} onMouseEnter={() => {onStroyEnter(1); onStoryTab(1)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">02</span><span className="span-text">#?????? ????????? ??? ?????? ??????</span>
                                    {story[1] ? <More /> : null}
                                </div>
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(2)}} onMouseEnter={() => {onStroyEnter(2); onStoryTab(2)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">03</span><span className="span-text">#????????? ????????? ????????? ????????? ??????</span>
                                    {story[2] ? <More /> : null}
                                </div>
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(3)}} onMouseEnter={() => {onStroyEnter(3); onStoryTab(3)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">04</span><span className="span-text">#????????? ?????? ????????? ??????</span>
                                    {story[3] ? <More /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contents-section-box5-container">
                        <div className="contents-section-box5-sub-title">
                            WHAT'S HAPPENING @SAMSUNG.COM
                        </div>
                        <div className="contents-section-box5-title">
                            ?????????
                        </div>
                        <div className="contents-section-box5-items">
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item1} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">EXPERIENCE</p>
                                    <p className="detail-title">????????? ????????????</p>
                                    <p className="detail-src">????????? Z ??????3|??????3 ?????? <br/>????????? ??????4, ??????2?????? <br/>????????? ???????????? ????????? ????????? ????????? ????????? ?????????</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item2} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">VIDEO</p>
                                    <p className="detail-title">????????? ?????? ?????? ??????</p>
                                    <p className="detail-src">?????? ????????? ????????????? ????????? ????????? ????????? ?????? ????????? ??????<br/>????????? ???????????????</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item3} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">EVENT</p>
                                    <p className="detail-title">??? ?????? ?????? : BEHINE THE SCENE</p>
                                    <p className="detail-src">??? ????????? ???????????? ???????????? ????????? ?????? ????????? ??? ?????? ????????????<br/>???????????????.</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item4} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">EXPERIENCE</p>
                                    <p className="detail-title">?????????????????? VR ?????????</p>
                                    <p className="detail-src">?????? ???????????? 3D VR ??????????????? ?????? ???????????? ???????????? ????????? <br/>??????????????????</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item5} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">VIDEO</p>
                                    <p className="detail-title">????????? ?????? ????????????</p>
                                    <p className="detail-src">????????? Z ??????3|??????3??? ?????? ???????????? ?????????! <br/>????????? ????????? ????????? ????????? ???????????? Z??? ????????? ???????????????</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item6} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">SUPPORT</p>
                                    <p className="detail-title">?????? ?????? ??????</p>
                                    <p className="detail-src">?????? ????????? ???????????? ??????????????? ???????????? ????????????????????? ?????? ??????????????????.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='scrollToTop' onClick={scrollToTop}>TOP</button>
                
            </div>
        </>
        
    )
}

function More()
{
    return(
        <>
        <div className="div-link">??? ????????????</div>
        </>
    )
}

export default ContentSection
