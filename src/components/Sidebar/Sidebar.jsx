import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets.js";
import "./Sidebar.css";
const Sidebar = () => {
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

    const loadprompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <>
            <div
                className={extended ? "sidebar slide-out" : "sidebar slide-in"}
            >
                <div className="top">
                    <div className="new-chat">
                        <img
                            src={assets.plus_icon}
                            alt="Plus Icon"
                            className="plus-chat"
                        />
                        <p className="new-chat-text">New Chat</p>
                    </div>
                    <div className="recent-tab">
                        {!prevPrompts ? (
                            <p className="recent-text">Recent</p>
                        ) : null}
                        {prevPrompts.map((item, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        loadprompt(item);
                                        setExtended(!extended);
                                    }}
                                    className="recent-entry"
                                >
                                    <img
                                        src={assets.message_icon}
                                        alt="Message Icon"
                                    />
                                    <p>
                                        {item.slice(0, 30)}
                                        {item.length > 29 ? "..." : null}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-item recent-entry">
                        <img src={assets.question_icon} alt="Question Icon" />
                        <a href="#" p>
                            Help
                        </a>
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.history_icon} alt="History Icon" />
                        <a href="#">Activity</a>
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.setting_icon} alt="Settings Icon" />
                        <a href="#">Settings</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
