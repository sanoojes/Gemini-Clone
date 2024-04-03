import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import ReactMarkdown from "react-markdown";
const Main = () => {
    const {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        extended,
        setExtended,
    } = useContext(Context);

    let card_text = [
        "Help explain reactjs in a kid-friendly way",
        "Road trip drive time and kid entertainment ideas",
        "Evaluate and rank common camera categories",
        "Tell me about React js and React native",
        "Brainstorm team bonding activities for our work retreat",
    ];
    return (
        <div className="container-side-nav">
            <div className="top-bar">
                <div className="menu">
                    <img
                        onClick={() => setExtended(!extended)}
                        src={assets.menu_icon}
                        alt="Menu Icon"
                        className="menu-icon"
                    />
                </div>
                <span className="head-name">Gemini</span>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main ">
                {!showResult ? (
                    <>
                        <div className="big-text">
                            <span className="greet">
                                <p>Hello, User. </p>
                            </span>
                            <span className="text1">
                                <p>How can I Help you Today?</p>
                            </span>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() => {
                                    onSent(card_text[0]);
                                }}
                            >
                                <span>{card_text[0]}</span>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    onSent(card_text[1]);
                                }}
                            >
                                <span>{card_text[1]}</span>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    onSent(card_text[3]);
                                }}
                            >
                                <span>{card_text[3]}</span>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    onSent(card_text[2]);
                                }}
                            >
                                <span>{card_text[2]}</span>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    onSent(card_text[4]);
                                }}
                            >
                                <span>{card_text[4]}</span>
                                <img src={assets.message_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img
                                src={assets.user_icon}
                                alt="User Profile Picture"
                            />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data-container">
                            <img src={assets.gemini_icon} alt="Gemini Icon" />
                            <div className="result-data">
                                {loading ? (
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                    <ReactMarkdown>{resultData}</ReactMarkdown>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="bottom-bar">
                <div className="prompt-bar">
                    <input
                        placeholder="Enter a prompt here"
                        type="text"
                        className="input-bar"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        value={input}
                    />
                    <img src={assets.gallery_icon} alt="Galery Icon" />
                    <img src={assets.mic_icon} alt="Mic Icon" />
                    {input ? (
                        <img
                            onClick={() => {
                                onSent();
                            }}
                            src={assets.send_icon}
                            alt="Send Icon"
                        />
                    ) : null}
                </div>
                <p className="bottom-text">
                    Gemini may display inaccurate info, including about people,
                    so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    );
};

export default Main;
