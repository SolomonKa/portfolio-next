"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import style from "./chatBot.module.css";
import ChatIcon from "../icons/ChatIcon";
import ChatInner from "../icons/chatInner";
import { useScroll } from "../providers/scrollProvider";

const ChatBot = () => {
  const isScrolled = useScroll();
  const [open, setOpen] = useState<boolean>(false);

  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    api: "/api/chat",
  });

  const isLoading = status === "streaming" || status === "submitted";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
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
              {messages.map((m) =>
                m.role === "assistant" ? (
                  <div key={m.id} className={style["bot-messages-wrapper"]}>
                    <ChatInner className={style["bot-avatar-icon"]} />
                    <div
                      className={`${style["bot-message-content"]} ${style["font-xs"]}`}
                    >
                      {/* v5: messages use parts[], not a single content string */}
                      {m.parts.map((part, i) =>
                        part.type === "text" ? (
                          <p key={i}>{part.text}</p>
                        ) : null,
                      )}
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className={style["you-message"]}>
                    <div
                      className={`${style["you-message-content"]} ${style["font-xs"]}`}
                    >
                      {m.parts.map((part, i) =>
                        part.type === "text" ? (
                          <p key={i}>{part.text}</p>
                        ) : null,
                      )}
                    </div>
                    <div className={style["you-avatar"]}>
                      <span>You</span>
                    </div>
                  </div>
                ),
              )}

              {isLoading && (
                <div className={style["bot-messages-wrapper"]}>
                  <ChatInner className={style["bot-avatar-icon"]} />
                  <div
                    className={`${style["bot-message-content"]} ${style["font-xs"]}`}
                  >
                    <p>...</p>
                  </div>
                </div>
              )}
            </div>

            <div className={style["input-section"]}>
              <form className={style["input-form"]} onSubmit={handleSubmit}>
                <div className={style["input-wrapper"]}>
                  <input
                    type="text"
                    value={input}
                    className={style["text-input"]}
                    placeholder="Ask question about my profile..."
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={style["send-btn"]}
                  >
                    Send
                  </button>
                </div>
              </form>
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
