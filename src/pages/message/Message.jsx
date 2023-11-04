import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
import head from "/img/head.png"
import logo from "/img/logo.png"

const messages = [
  {
    id: 1,
    owner: false,
    image: logo,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 2,
    owner: true,
    image: head,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 3,
    owner: false,
    image: logo,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 4,
    owner: true,
    image: head,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 5,
    owner: false,
    image: logo,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 6,
    owner: false,
    image: logo,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 7,
    owner: false,
    image: logo,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
  {
    id: 8,
    owner: true,
    image: head,
    content: "哈囉翰毅！看過你的作品以及履歷後決定邀請您來面試本公司，希望有機會能夠一起共同開發項目！！",
  },
];


const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <ul className="breadcrumbs">
            <li>
              <Link to="/messages">訊息</Link>
            </li>
            <li>
              <span className="divider">/</span>
              <span>豬八戒</span>
            </li>
        </ul>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={`item ${message.owner ? "owner" : ""}`}>
              <img src={message.image} alt="" />
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="write">
          <textarea type="text" placeholder="說點什麼吧！" />
          <button>發送</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
