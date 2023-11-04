import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import { messages } from "../../data";

const Messages = () => {
  const [activeMessages, setActiveMessages] = useState(
    new Array(messages.length).fill(false)
    // 創建'messages.length'的新數組，將數組的所有元素填入 false
    // 讓每個元素都表示一個訊息行的 "已讀" 狀態，初始狀態都是 false
  );

  const currentUser = {
    id: 1,
    username: "陳翰毅",
    isSeller: true,
  };

  const toggleRead = (index) => {
    const newActiveMessages = [...activeMessages];
    newActiveMessages[index] = !newActiveMessages[index];
    setActiveMessages(newActiveMessages);
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>訊息</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>{currentUser.isSeller ? "買家" : "賣家"}</th>
              <th>最後訊息</th>
              <th>時間</th>
              <th>已讀</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message.id} className={activeMessages[index] ? "active" : ""}>
                <td>{message.name}</td>
                <td>
                  <Link to={`/message/123`} className="link">
                    {message.message.substring(0, 100)}...
                  </Link>
                </td>
                <td>{message.timestamp}</td>
                <td>
                  <button onClick={() => toggleRead(index)}>標記已讀</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
