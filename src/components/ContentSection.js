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
                    <div className="contents-section-box2-container" style={colorAcive ? {color:"white"} : {color:"black"}}>
                        <div className="cotent-section-box2-main-title">
                            <h2>가전</h2>
                        </div>
                        <div className="content-section-box2-tabs">
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(0); setColorActive(false)}}>삼성 위크</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(1); setColorActive(false)}}>BESPOKE 김치플러스</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(2); setColorActive(false)}}>BESPOKE HOME</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(3); setColorActive(true)}}>셰프컬렉션</button>
                            </div>
                            <div className="cotent-section-box2-title">
                                <button onClick={() => {onClickTab2(4); setColorActive(true)}}>온라인 체험존</button>
                            </div>
                        </div>
                        <div className="contents-section-box-slider">
                            <div className="contents-section-box2-bg">
                                <div className="contents-section-box2-items" style={{transform:`translateX(-${sectionTab2}00%)`}}>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img1} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>모두 모두 모여라! 공동구매</h1>
                                            <p>함께 뭉치면, 인기 가전 최대 354만원 할인!</p>
                                            <button>공동 구매하기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img2} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>2022 BESPOKE 김치플러스</h1>
                                            <p>취향은 달라도 선택은 언제나 BESPOKE 김치플러스</p>
                                            <button>구매혜택보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img3} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>BESPOKE HOME</h1>
                                            <p>우리집을 비스포크하다</p>
                                            <button style={underLineBlack}>360 컬러 조합하기</button>
                                            <button>더 알아보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img4} alt="" />
                                        <div className="contents-section-box2-item-text">
                                            <h1>셰프컬렉션</h1>
                                            <p>완벽을 소유하다</p>
                                            <button style={underLineWhite}>제품 모두 보기</button>
                                            <button style={btnColor}>조합하여 구매하기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section2Img5} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box2-item-text">
                                            <h1>BESPOKE 나답게 집꾸</h1>
                                            <p>내 취향에 맞는 BESPOKE로 공간을 나답게 꾸며 보세요!</p>
                                            <button style={btnColor}>BESPOKE 체험하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contents-section-box3-container" style={colorAcive2 ? {color:"white"} : {color:"black"}}>
                        <div className="cotent-section-box3-main-title">
                            <h2>모바일&amp;PC</h2>
                        </div>
                        <div className="content-section-box3-tabs">
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(0); setColorActive2(false)}}>삼성 위크</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(1); setColorActive2(false)}}>Galaxy Z Flip3 5G</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(2); setColorActive2(false)}}>Galaxy Unpacked</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(3); setColorActive2(false)}}>갤럭시 캠퍼스 스토어</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(4); setColorActive2(false)}}>Galaxy Book</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(5); setColorActive2(false)}}>갤럭시 스튜디오</button>
                            </div>
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab3(6); setColorActive2(true)}}>온라인 체험존</button>
                            </div>
                        </div>
                        <div className="contents-section-box-slider">
                            <div className="contents-section-box3-bg">
                                <div className="contents-section-box3-items" style={{transform:`translateX(-${sectionTab3}00%)`}}>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img1} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Z FOLD3 5G</h1>
                                            <p>갤럭시 Z 폴드3도 함께 사면 더 커지는<br /> 갤럭시 아카데미 혜택으로 만나보세요</p>
                                            <p></p>
                                            <button style={underLineBlack} className="btn">더 알아보기</button>
                                            <button className="btn">구매 혜택보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img2} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Z Flip3 5G</h1>
                                            <button style={underLineBlack} className="btn">더 알아보기</button>
                                            <button className="btn">구매 혜택 보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img3} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Unpacked<br/>Part2 하이라트</h1>
                                            <button className="btn">영상다시보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img4} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>갤럭시 컴퍼스 스토어</h1>
                                            <p>대학생, 대학원생과 대학 교원, 교직원을 위한<br/>교육 할인 스토어를 만나보세요!</p>
                                            <button className="btn">더 알아보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section3Img5} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>Galaxy Book Academy</h1>
                                            <p>Windows11과 갤럭시 북의 만남으로 새로움을 경험할 시간<br/>삼성닷컴 단독 혜택으로 만나보세요</p>
                                            <button className="btn">구매 혜택 보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section3Img6} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>갤럭시 스튜디오</h1>
                                            <p>갤럭시의 놀라운 기능을 마음껏 체험해 보세요</p>
                                            <button className="btn">체험하기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item ">
                                        <img src={section3Img7} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>갤럭시 온라인 체험존</h1>
                                            <p>오마이걸 효정과 함께 나에게 꼭 맞는<br/>갤럭시 Z부터 워치4, 버즈2까지, 지금 만나 보세요.</p>
                                            <button style={btnColor} className="btn">입장하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contents-section-box3-container" style={colorAcive3 ? {color:"white"} : {color:"black"}}>
                        <div className="cotent-section-box3-main-title">
                            <h2>TV&amp;오디오</h2>
                        </div>
                        <div className="content-section-box3-tabs">
                            <div className="cotent-section-box3-title">
                                <button onClick={() => {onClickTab4(0); setColorActive3(false)}}>삼성 위크</button>
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
                                <button onClick={() => {onClickTab4(5); setColorActive3(true)}}>스마트 모니터</button>
                            </div>
                        </div>
                        <div className="contents-section-box-slider">
                            <div className="contents-section-box3-bg">
                                <div className="contents-section-box3-items" style={{transform:`translateX(-${sectionTab4}00%)`}}>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img1} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>TV 베스트 셀러</h1>
                                            <p>모두 모두 모여라!<br />공동구매가로 초대형 TV부터 홈시네마까지 놓치지 마세요</p>
                                            <p></p>
                                            <button style={underLineBlack} className="btn">모든 제품 보기</button>
                                            <button className="btn">공동 구매하기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img2} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>TV를 보다, The 나답게</h1>
                                            <p>나만의 Lifestyle TV에 딱 맞는 TV를 찾아보세요</p>
                                            <button style={underLineBlack} className="btn">더 알아보기</button>
                                            <button className="btn">제품 모두 보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img3} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <h1>스케일이 다른 프리미어 빔</h1>
                                            <p>영화관보다 더 영화관처럼 <br/>4k 프리미어 빔으로 누리는 홈시네마</p>
                                            <button className="btn" style={underLineWhite}>더 알아보기</button>
                                            <button className="btn" style={btnColor}>더 제품 모두 보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img4} alt="" />
                                        <div className="contents-section-box3-item-text">
                                            <p>Born to be incomparable</p>
                                            <h1>MICRO LED</h1>
                                            <p>지금껏 보지 못했던<br/>새로운 빛의 세계를 체험해보세요</p>
                                            <button className="btn" style={underLineWhite}>자세히 보기</button>
                                            <button className="btn" style={btnColor}>매장 찾기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box2-item">
                                        <img src={section4Img5} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>하마카돈 RADIANCE 2400 런칭</h1>
                                            <p>50만원 즉시 할인에서 하만 뮤직라이프 3종 증정까지</p>
                                            <button className="btn" style={btnColor}>구매 혜택 보기</button>
                                        </div>
                                    </div>
                                    <div className="contents-section-box3-item">
                                        <img src={section4Img6} alt="" style={{height:"810px"}}/>
                                        <div className="contents-section-box3-item-text">
                                            <h1>미국 주요 매체 선정 '최고의 모니터'</h1>
                                            <p>나만의 공간에서 하나로 즐기는 올인원 스크린</p>
                                            <button className="btn" style={btnColor}>구매하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-section-box4-container">
                        <div className="content-section-box4-items">
                            <div className="content-section-box4-head">
                                <h1>스토리</h1>
                                <p>당신의 삶을 특별하게 해줄 새로운 아이디어 <br/>스마트하게 사는 새로운 방법을 알아보세요.</p>
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
                                    <span className="span-num">01</span><span className="span-text">삼성 갤럭시와 메종 키츠네 여우의 만남</span>
                                    {console.log(story[0])}
                                    {story[0] ? <More /> : null}
                                </div>
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(1)}} onMouseEnter={() => {onStroyEnter(1); onStoryTab(1)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">02</span><span className="span-text">#함께 만드는 더 나은 미래</span>
                                    {story[1] ? <More /> : null}
                                </div>
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(2)}} onMouseEnter={() => {onStroyEnter(2); onStoryTab(2)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">03</span><span className="span-text">#우리가 집에서 일하는 새로운 방법</span>
                                    {story[2] ? <More /> : null}
                                </div>
                                <div className="content-section-box4-title" onMouseLeave={() => {onStroyLeave(3)}} onMouseEnter={() => {onStroyEnter(3); onStoryTab(3)}}>
                                    <div className="deco-line"></div>
                                    <span className="span-num">04</span><span className="span-text">#승리를 향한 완벽한 준비</span>
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
                            트렌디
                        </div>
                        <div className="contents-section-box5-items">
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item1} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">EXPERIENCE</p>
                                    <p className="detail-title">갤럭시 스튜디오</p>
                                    <p className="detail-src">갤럭시 Z 폴드3|플립3 부터 <br/>갤럭시 워치4, 버즈2까지 <br/>새로운 갤럭시의 놀라운 기능을 마음껏 체험해 보세요</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item2} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">VIDEO</p>
                                    <p className="detail-title">한눈에 보는 제품 영상</p>
                                    <p className="detail-src">어떤 영상을 찾으세요? 다양한 영상을 한눈에 보고 마음에 드는<br/>제품을 골라보세요</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item3} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">EVENT</p>
                                    <p className="detail-title">팀 삼성 룩북 : BEHINE THE SCENE</p>
                                    <p className="detail-src">집 안에서 경험하는 놀랍도록 편리한 모든 순간을 팀 삼성 룩북으로<br/>만나보세요.</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item4} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">EXPERIENCE</p>
                                    <p className="detail-title">디지털프라자 VR 스토어</p>
                                    <p className="detail-src">언제 어디서나 3D VR 스토어에서 제품 정보부터 상담까지 편하게 <br/>체험해보세요</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item5} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">VIDEO</p>
                                    <p className="detail-title">갤럭시 리얼 마케팅쇼</p>
                                    <p className="detail-src">갤럭시 Z 폴드3|플립3를 위해 찐팬들이 뭉쳤다! <br/>미션을 수행해 나가는 최정예 프로덕션 Z의 활약을 만나보세요</p>
                                </div>
                            </div>
                            <div className="contents-section-box5-item">
                                <img src={sectionbox5item6} alt="" />
                                <div className="contents-section-box5-item-detail">
                                    <p className="detail-type">SUPPORT</p>
                                    <p className="detail-title">매장 상담 예약</p>
                                    <p className="detail-src">맞춤 상담을 예약하고 삼성전자가 제안하는 라이프스타일을 직접 체험해보세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

function More()
{
    return(
        <>
        <div className="div-link">더 알아보기</div>
        </>
    )
}

export default ContentSection
