/* eslint-disable no-unused-vars */
import { Title, ChatCard } from "@the-statics/shared-components";
import styles from "../pages/Chatlist.module.scss";
import { Link } from "react-router-dom";
import ApiService from "../services/Api";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const ApiInstance = new ApiService(axios);

function Chatlist() {
  const user = useSelector(selectUser);
  const [error, setError] = useState("");
  const [chatlist, setChatlist] = useState("");
  const [chatInfo, setChatInfo] = useState({
    id: "",
    name: "",
    image: "",
    chatrooms: "",
  });
  useQuery("chatlist", ApiInstance.getChatlist(), {
    staleTime: Infinity,

    onSuccess: ({ data }) => {
      if (!data.success) {
        setError("데이터를 불러오지 못했습니다.");
      }

      setChatInfo({
        id: data.id,
        name: data.name,
        image: data.image,
        chatrooms: data.chatrooms,
      });
    },
  });

  return (
    <div>
      <Title value="채팅" />
      <ul className={styles["chat-list-container"]}>
        <li className={styles["chat-list"]}>
          {chatInfo.map((info, i) => (
            <Link key={i} to="/chat/123">
              <ChatCard
                profileImage="https://randomuser.me/api/portraits/men/9.jpg"
                name="공유정"
                chatText="첫 눈에 반했어요!"
                time="2022/03/12 13:00:43"
              />
            </Link>
          ))}
          {/* <Link to="/chat/123">
            <ChatCard
              profileImage="https://randomuser.me/api/portraits/men/9.jpg"
              name="공유정"
              chatText="첫 눈에 반했어요!"
              time="2022/03/12 13:00:43"
            />
          </Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Chatlist;
