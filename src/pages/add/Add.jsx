import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>新增方案</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">標題</label>
            <input
              type="text"
              placeholder="例：擅長的工作"
            />
            <label htmlFor="">種類</label>
            <select name="cats" id="cats">
              <option value="design">設計</option>
              <option value="web">網頁開發</option>
              <option value="animation">動畫製作</option>
              <option value="music">音樂製作</option>
            </select>
            <label htmlFor="">封面圖片</label>
            <input type="file" />
            <label htmlFor="">上傳圖片</label>
            <input type="file" multiple />
            <label htmlFor="">描述</label>
            <textarea name="" id="" placeholder="向客戶介紹您的服務的簡短說明" rows="10"></textarea>
            <button>啟動</button>
          </div>
          <div className="details">
            <label htmlFor="">服務名稱</label>
            <input type="text" placeholder="例：一頁式網站" />
            <label htmlFor="">簡介</label>
            <textarea name="" id="" placeholder="您所提供服務的簡介" rows="10"></textarea>
            <label htmlFor="">交貨時間(天)</label>
            <input type="number" />
            <label htmlFor="">修改次數</label>
            <input type="number" />
            <label htmlFor="">新增功能</label>
            <input type="text" placeholder="例：頁面設計" />
            <input type="text" placeholder="例：檔案上傳" />
            <input type="text" placeholder="例：設定域名" />
            <input type="text" placeholder="例：託管" />
            <label htmlFor="">價格</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
