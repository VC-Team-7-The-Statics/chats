/* eslint-disable no-unused-vars */
import { Button01, Input02 } from "@the-statics/shared-components";
import styles from "../pages/Chat.module.scss";
import CHATROOMS from "../chatrooms.json";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { selectChatroom } from "../features/chatroom/chatroomSlice";
import { useSelector } from "react-redux";

function Chat() {
  const navigate = useNavigate();
  const chatroom = useSelector(selectChatroom);
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const onSendMessage = () => {
    setMessage(input);
  };

  useEffect(() => {
    const socket = io("http://localhost:8000");
    // - client - 룸을 생성해달라고 요청하는 메시지: joinRoom
    // - server - 룸에 입장했다고 알려주는 메시지: joinedRoom
    // - client - 채팅을 보낼때마다 알려주는 메시지: chat
    // - server - 한 사람이 보낸 채팅을 다른 유저에게 보내주는 메시지: chat-broadcast
    // - server - 채팅을 불러오지 못했거나 저장하지 못했을때 알려주는 메시지: error
    socket.connect();

    socket.emit("joinRoom");

    socket.on("joinedRoom", (chats) => {
      setChats((prev) => [...prev, chats]);
    });

    socket.emit("chat", {});

    socket.on("leave_room", () => {});

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles["chat-container"]}>
      <Button01 type="button" onClick={() => navigate(-1)}>
        뒤로
      </Button01>
      <div className={styles["chats-container"]}>
        <ul className={styles.chats}>
          {CHATROOMS[0].chats.map((chat, index) => (
            <>
              <li
                key={index}
                className={
                  chat.id === "629b1bd99bb15274874724d9"
                    ? `${styles["chat-block"]} ${styles.left}`
                    : `${styles["chat-block"]} ${styles.right}`
                }
              >
                <span className={styles.text}>{chat.text}</span>
                <span className={styles.date}>
                  {new Date(1654342345004).toLocaleString()}
                </span>
              </li>
              <li
                key={index}
                className={
                  chat.id === "629b1bd99bb15274874724d9"
                    ? `${styles["chat-block"]} ${styles.left}`
                    : `${styles["chat-block"]} ${styles.right}`
                }
              >
                <span className={styles.text}>{chat.text}</span>
                <span className={styles.date}>
                  {new Date(1654342345004).toLocaleString()}
                </span>
              </li>
              <li
                key={index}
                className={
                  chat.id === "629b1bd99bb15274874724d9"
                    ? `${styles["chat-block"]} ${styles.left}`
                    : `${styles["chat-block"]} ${styles.right}`
                }
              >
                <span className={styles.text}>
                  {
                    "chat.textchat.textchat.textchat.textchat.textchat.textchat.text"
                  }
                </span>
                <span className={styles.date}>
                  {new Date(1654342345004).toLocaleString()}
                </span>
              </li>
              <li
                key={index}
                className={
                  chat.id === "629b1bd99bb15274874724d9"
                    ? `${styles["chat-block"]} ${styles.left}`
                    : `${styles["chat-block"]} ${styles.right}`
                }
              >
                <span className={styles.text}>{chat.text}</span>
                <span className={styles.date}>
                  {new Date(1654342345004).toLocaleString()}
                </span>
              </li>
              <li
                key={index}
                className={
                  chat.id === "629b1bd99bb15274874724d9"
                    ? `${styles["chat-block"]} ${styles.left}`
                    : `${styles["chat-block"]} ${styles.right}`
                }
              >
                <span className={styles.text}>{chat.text}</span>
                <span className={styles.date}>
                  {new Date(1654342345004).toLocaleString()}
                </span>
              </li>
              <li
                key={index}
                className={
                  chat.id === "629b1bd99bb15274874724d9"
                    ? `${styles["chat-block"]} ${styles.left}`
                    : `${styles["chat-block"]} ${styles.right}`
                }
              >
                <span className={styles.text}>{chat.text}</span>
                <span className={styles.date}>
                  {new Date(1654342345004).toLocaleString()}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className={styles.input}>
        <form onSubmit={onSendMessage}>
          <Input02
            placeholder="입력해주세요."
            onChange={(e) => setInput(e.target.value)}
          ></Input02>
          <Button01 type="submit">전송하기</Button01>
        </form>
      </div>
    </div>
  );
}

export default Chat;

/**
 * {values.map((value, index) => (
        <Checkbox key={index} value={value} {...others}></Checkbox>
      ))}
 */
