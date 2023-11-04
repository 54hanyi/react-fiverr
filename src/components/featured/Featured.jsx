import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            立刻為你找到合適的 <span>自由職業</span> 服務
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder="搜尋任何服務..." />
            </div>
            <button>
              啟動！
            </button>
          </div>
          <div className="popular">
            <span>熱門：</span>
            <button>網站設計</button>
            <button>WordPress</button>
            <button>標誌設計</button>
            <button>AI服務</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/Me.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
