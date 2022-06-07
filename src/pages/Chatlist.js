import { Title, ChatCard } from "@the-statics/shared-components";
import styles from "../pages/Chatlist.module.scss";

function Chatlist() {
  return (
    <div>
      <Title value="채팅" />
      <ul className={styles["chat-list-container"]}>
        <li className={styles["chat-list"]}>
          <ChatCard
            profileImage={"https://randomuser.me/api/portraits/men/9.jpg"}
            name="공유정"
            chatText="첫 눈에 반했어요!"
            time="2022/03/12 13:00:43"
          />
        </li>
        <li className={styles["chat-list"]}>
          <ChatCard
            profileImage={"https://randomuser.me/api/portraits/men/8.jpg"}
            name="공희정"
            chatText="첫 눈에 반했어요!"
            time="2022/03/12 13:00:43"
          />
        </li>
        <li className={styles["chat-list"]}>
          <ChatCard
            profileImage={"https://randomuser.me/api/portraits/men/7.jpg"}
            name="공유점"
            chatText="첫 눈에 반했어요!"
            time="2022/03/12 13:00:43"
          />
        </li>
      </ul>
    </div>
  );
}

export default Chatlist;
