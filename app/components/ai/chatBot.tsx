"use client";

import { useState } from "react";
import style from "./chatBot.module.css";
import ChatIcon from "../icons/ChatIcon";
import ChatInner from "../icons/chatInner";
import { useScroll } from "../providers/scrollProvider";

const ChatBot = () => {
  const [message, setMessage] = useState();
  const [open, setOpen] = useState<boolean>(false);
  const isScrolled = useScroll();

  console.log(isScrolled);

  async function sendMessage() {
    try {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: "It will go like this" }),
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={`${style["bot-container"]}`}>
      {open ? (
        <div className={style["messanger-wrapper"]}>
          <button
            type="button"
            className={style["close-btn"]}
            onClick={() => setOpen(false)}
          >
            close
          </button>
          <div className={style.messanger}>
            <div className={style.header}>
              <ChatInner className={style["inner-bot"]} />
              <div className={style["bot-name"]}>
                <h3 className={style["heading-title"]}>Portfolio Assistent</h3>
                <p className={style["font-xs"]}>
                  Ask anything about my background, skills or availability
                </p>
              </div>
            </div>
            <div className={style["messanger-body"]}>
              <div className={style["bot-messages-wrapper"]}>
                <ChatInner className={style["bot-avatar-icon"]} />

                <div
                  className={`${style["bot-message-content"]} ${style["font-xs"]}`}
                >
                  <p>Hi, what is Solomon's availability</p>
                </div>
              </div>
              <div className={style["you-message"]}>
                <div
                  className={`${style["you-message-content"]} ${style["font-xs"]}`}
                >
                  <p>He is available imidietly</p>
                </div>
                <div className={style["you-avatar"]}>
                  <span>You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={isScrolled ? style["scroll-active"] : ""}>
          <p className={style["chat-label"]}>Chat Bot</p>
          <button type="button" onClick={() => setOpen(true)}>
            <ChatIcon className={style["chat-icon"]} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
