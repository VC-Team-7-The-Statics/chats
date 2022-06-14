// import { Title, ChatCard } from "@the-statics/shared-components";
import styles from "../pages/Chatlist.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChatroom } from "../features/chatroom/chatroomSlice";

function Chatlist() {
  const chatroom = useSelector(selectChatroom);

  return (
    <div className={styles["chatlist-container"]}>
      <h1 className={styles.title}>채팅</h1>
      <ul className={styles["chatlists"]}>
        {chatroom.chatrooms.map((chatroom, i) => (
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
    </div>
  );
}

export default Chatlist;
