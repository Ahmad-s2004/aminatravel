import React, { useState } from 'react';

const Home = () => {
    const [showChat, setShowChat] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [check, setCheck] = useState(false)

    const toggleChat = () => {
        setShowChat((prev) => !prev);
    };

    const sendMessage = () => {
        if (userInput.trim() !== '') {
            setMessages([...messages, userInput]);
            setUserInput('');
            setCheck(true)
        }
    };

    return (
        <div className="text-center pt-5">
            <div className="mt-5 pt-5">
                <h4 className="mt-5 fw-semibold text-uppercase">Home</h4>
            </div>

            {showChat ? (
                <button className="btn btn-primary chat-btn d-none" onClick={toggleChat}>Open Chat</button>
            ) : (
                <button
                    className="btn bg-greenn text-white chat-btn rounded-circle pt-2"
                    onClick={toggleChat}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-dots mb-1" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                    </svg>
                </button>
            )}

            {showChat && (
                <div className="chat-box rounded-2">
                    <div className="d-flex border-top-radius bg-green align-items-top justify-content-between py-1">
                        <div className='d-flex align-items-center'>
                        <i className='fa-regular fa-compass fnt-16 ms-2' />
                        <div className="ms-2 my-1 py-1 text-white fnt-15"> Trip Planner</div>
                        </div>
                        <div className="w-25">
                            <button className="btn bg-green" style={{marginRight:"-30px"}} onClick={toggleChat}><i className='fa-solid fa-multiply text-white' /></button>
                        </div>
                    </div>
                    <div className="pt-4 px-2 scroll">
                        <div className="d-flex justify-content-start my-2">
                            <div className="message w-85 bg-secondary-subtle rounded px-1 py-2 fnt-14">
                                Hey! I'm TravelTriangle's Trip Planner... Are you looking for help in planning your trip?
                            </div>
                        </div>
                        {
                            (check ?
                                <>
                               
                            </>
                            :
                            <>
                            <div className="d-flex justify-content-start my-2">
                            <button className="btn btn-outline-secondary rounded-5 px-3 py-1 fnt-14">Umrah</button>
                        </div>
                        <div className="d-flex justify-content-start my-2">
                            <button className="btn btn-outline-secondary rounded-5 px-3 py-1 fnt-14">Hajj</button>
                        </div>
                        </>
                        )
                        }
                        <div>
                            {messages.map((msg, index) => (
                                <div className="d-flex justify-content-end my-2" key={index}>
                                    <div className="message w-85 bg-green rounded py-2 fnt-14">{msg}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="move-to-bottom d-flex my-1 border rounded">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            className="w-100 border-none ps-3 pe-2 fnt-14 outline-none"
                            placeholder="Enter Message..."
                        />
                        <button className="btn bg-green w-25 rounded-1" onClick={sendMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
