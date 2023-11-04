import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import { tables } from "../../data";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "陳翰毅",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "我的方案" : "方案訂單"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>新增方案</button>
            </Link>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>圖片</th>
              <th>標題</th>
              <th>價格</th>
              <th>銷售量</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((item) => (
              <tr key={item.id}>
                <td>
                  <img className="image" src={item.imageSrc} alt="" />
                </td>
                <td>{item.description}</td>
                <td>US${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <img className="delete" src="./img/delete.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
