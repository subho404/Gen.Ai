import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets'; 
import { Context } from '../../context/Context';


const Main = () => {
    
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  
    return (
        <div className='main'>
           
            <div className="nav">
                <p>GenAi</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
         
            <div className="main-container">
                
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, TechPirates.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                       
                        <div className="cards">
                           
                            <div className="card">
                                <p>Suggests beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass Icon" />
                            </div>
                           
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Light Bulb Icon" />
                            </div>
                           
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message Icon" />
                            </div>
                         
                            <div className="card">
                                <p>Improve readability of the following code</p>
                                <img src={assets.code_icon} alt="Code Icon" />
                            </div>
                        </div>
                    </>
                    : 
                    <div className='result'>
                 
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? 
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : 
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
                
                <div className="main-bottom">
                   
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter a prompt here"
                        />
                       
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Microphone Icon" />
                            
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" /> : null}
                        </div>
                    </div>
                   
                    <p className="bottom-info">
                        Gemini may display inaccurate information, including about people, so double-check its responses.
                        <a href="https://support.google.com/gemini/answer/13594961?visit_id=638453200336802822-3687608632&p=privacy_notice&rd=1#privacy_notice">Your privacy and Gemini apps</a>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Main;
