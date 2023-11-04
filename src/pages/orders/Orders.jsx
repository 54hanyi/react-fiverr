import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { orders } from "../../data";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "陳翰毅",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>方案訂單</h1>
        </div>
        <table>
          <thead>
            <tr>
            <th>圖片</th>
            <th>標題</th>
            <th>價格</th>
            {<th>{currentUser.isSeller ? "買家" : "賣家"}</th>}
            <th>聯繫</th>
          </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
            <tr key={index}>
              <td>
                <img className="image" src={item.imageSrc} alt="" />
              </td>
              <td>{item.description}</td>
              <td>US${item.price}</td>
              <td>{item.seller}</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
