"use client";

import { useEffect, useRef, useState } from "react";
import ChatIcon from "../icons/ChatIcon";
import ChatInner from "../icons/chatInner";
import { useScroll } from "../providers/scrollProvider";
import useScreenSize from "../hooks/isMobile";
import style from "./chatBot.module.css";

class GenIds {
  private nextId = 0;

  constructor(startId: number) {
    this.nextId = startId;
  }

  next() {
    this.nextId += 1;
    return this.nextId;
  }
}

type MessagesType = { id: number; role: string; content: string };

const ChatBot = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isScrolled = useScroll();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessagesType[]>([]);
  const genIdRef = useRef(new GenIds(0));
  const bottomRef = useRef<HTMLDivElement>(null);

  const isMobile = useScreenSize();

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run on new messages to auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = open ? "hidden" : "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, open]);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessage = {
      id: genIdRef.current.next(),
      role: "user",
      content: input,
    };

    const messageWithHistory = [...messages, newMessage];
    setMessages(messageWithHistory);
    setInput("");

    try {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageWithHistory),
      });
      if (!res.ok) {
        throw new Error("Request is failed");
      }

      const data = await res.json();

      const assistandId = genIdRef.current.next();

      setMessages((prev) => [
        ...prev,
        { id: assistandId, role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={style["bot-container"]}>
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
                  {/* Ask anything about Solomon's profile */}
                  Posez-moi toutes vos questions concernant mon profil
                </p>
              </div>
            </div>
            <div className={style["messanger-body"]}>
              {messages.map((m) =>
                m.role !== "user" ? (
                  <div key={m.id} className={style["bot-messages-wrapper"]}>
                    <ChatInner className={style["bot-avatar-icon"]} />

                    <div
                      className={`${style["bot-message-content"]} ${style["font-xs"]}`}
                    >
                      <p>{m.content}</p>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className={style["you-message"]}>
                    <div
                      className={`${style["you-message-content"]} ${style["font-xs"]}`}
                    >
                      <p>{m.content}</p>
                    </div>
                    <div className={style["you-avatar"]}>
                      <span>You</span>
                    </div>
                  </div>
                ),
              )}
              <div ref={bottomRef} />
            </div>
            <div className={style["input-section"]}>
              <form
                className={style["input-form"]}
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <div className={style["input-wrapper"]}>
                  <input
                    type="text"
                    value={input}
                    className={style["text-input"]}
                    placeholder="Poser une question sur mon profil..."
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" className={style["send-btn"]}>
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
