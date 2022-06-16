/* eslint-disable no-unused-vars */
import styles from "../pages/Chatlist.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectChatroom } from "../features/chatroom/chatroomSlice";

function Chatlist() {
  const user = useSelector(selectChatroom);

  const handleClick = (chatroom) => () => {
    if (window.isNativeApp) {
      const link = {
        type: "CHATROOM",
        userId: user.id,
        roomId: chatroom.roomId,
        friendId: chatroom.id,
        friendImage: chatroom.image,
        friendName: chatroom.name,
      };

      window.ReactNativeWebView.postMessage(`${JSON.stringify(link)}`);
    }
  };

  return (
    <div className={styles["chatlist-container"]}>
      <h1 className={styles.title}>채팅</h1>
      <div className={styles["chatlists-container"]}>
        {!user.chatrooms.length && (
          <div className={styles["notification-container"]}>
            <p className={styles.notification}>
              진행중인 채팅이 아직 없습니다.
            </p>
          </div>
        )}

        <ul className={styles["chatlists"]}>
          {user.chatrooms.map((chatroom, i) => (
            <>
              <li key={i} className={styles["chat-list"]}>
                <Link to={`/chat/${chatroom.roomId}`} key={i}>
                  <div className={styles["chat-card-container"]}>
                    <div className={styles["image-container"]}>
                      <img src={chatroom.image} alt="profile" />
                    </div>
                    <div className={styles.content}>
                      <h2 className={styles.name}>{chatroom.name}</h2>
                    </div>
                  </div>
                </Link>
              </li>
            </>
          ))}
        </ul>
        {/* 
        <div>
      <Title value="채팅" />
      <ul className={styles["chat-list-container"]}>
        <li className={styles["chat-list"]}>
          {user.chatrooms.map((chatroom, i) => (
            <div key={i} onClick={handleClick(chatroom)}>
              <ChatCard profileImage={chatroom.image} name={chatroom.name} />
            </div>
         */}
      </div>
    </div>
  );
}

export default Chatlist;
