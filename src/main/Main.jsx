import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult ? <>
                <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to se on an upcomping road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to se on an upcomping road trip</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to se on an upcomping road trip</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ?
                    <div className = 'loadar'>
                        <hr />
                        <hr />
                        <hr />
                </div>
                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    } 
                </div>
            
                </div>
}
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>(setInput(e.target.value))} value={input} type="text" placeholder='Enter prompt here...' />
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />

                    <img onClick = {()=>onSent()} src={assets.send_icon} alt="" />
                </div>
                <div className="bottom-info">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, possimus.</p>
            </div>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Main