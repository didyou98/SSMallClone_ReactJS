import React, {useState, useEffect} from 'react'
import './Parallax.css';
import galaxy_z_flip3_5g_highlights_design_static from '../img/parallax/galaxy-z-flip3-5g_highlights_design_static.png';
import item1 from '../img/parallax/galaxy-z-flip3-5g_highlights_colors_black.png'
function Parallax() {
    const [position, setPosition] = useState(0);

    function onScroll(){
        console.log(window.scrollY);
        setPosition(window.scrollY);
        
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);
    return (
        <div className='wrapper'>
            <div className='title'>
                <h2>디자인</h2>
                <strong className='title-main'>
                    누구나 한 번 보면
                    <br />
                    펼쳐보지
                    <br />
                    않을 수 없는
                </strong>
                <img src={galaxy_z_flip3_5g_highlights_design_static} alt=""/>
            </div>
            <div className='parallax'>
                    <div className='test-black' style={{opacity: (position - 600) / 50,}}>
                        <img src={item1} alt="" />
                        <h1>블랙</h1>
                    </div>
                </div>
        </div>
    )
}

export default Parallax
