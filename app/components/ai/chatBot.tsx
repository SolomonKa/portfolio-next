"use client";

import { useState } from "react";
import style from "./chatBot.module.css";

const ChatBot = () => {
  const [message, setMessage] = useState();

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
    <button className={style.btn} type="button" onClick={sendMessage}>
      Send Messages
    </button>
  );
};

export default ChatBot;
