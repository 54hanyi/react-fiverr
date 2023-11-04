import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>服務類別</h2>
            <Link className="link">圖形與設計</Link>
            <Link className="link">數位行銷</Link>
            <Link className="link">寫作與翻譯</Link>
            <Link className="link">影片與動畫</Link>
            <Link className="link">音樂與音訊</Link>
            <Link className="link">程式設計與技術</Link>
            <Link className="link">數據</Link>
            <Link className="link">商業</Link>
            <Link className="link">生活方式</Link>
            <Link className="link">攝影</Link>
            <Link className="link">網站地圖</Link>
          </div>
          <div className="item">
            <h2>關於接包吧</h2>
            <Link className="link">新聞與新聞</Link>
            <Link className="link">合作夥伴</Link>
            <Link className="link">隱私權政策</Link>
            <Link className="link">服務條款</Link>
            <Link className="link">智慧財產權聲明</Link>
            <Link className="link">投資人關係</Link>
            <Link className="link">聯繫業務人員</Link>
          </div>
          <div className="item">
            <h2>支持與幫助</h2>
            <Link className="link">幫助支持</Link>
            <Link className="link">信任與安全</Link>
            <Link className="link">在 接包吧 上銷售</Link>
            <Link className="link">在 接包吧 上購買</Link>
          </div>
          <div className="item">
            <h2>社群</h2>
            <Link className="link">客戶成功案例</Link>
            <Link className="link">社區中心</Link>
            <Link className="link">論壇</Link>
            <Link className="link">活動</Link>
            <Link className="link">部落格</Link>
            <Link className="link">影響者</Link>
            <Link className="link">附屬公司</Link>
            <Link className="link">Podcast</Link>
            <Link className="link">邀請朋友</Link>
            <Link className="link">成為賣家</Link>
            <Link className="link">社區標準</Link>
          </div>
          <div className="item">
            <h2>更多關於 接包吧 的內容</h2>
            <Link className="link">接包吧 業務</Link>
            <Link className="link">接包吧 Pro</Link>
            <Link className="link">接包吧 標誌製作工具</Link>
            <Link className="link">接包吧 指南</Link>
            <Link className="link">獲得啟發</Link>
            <Link className="link">接包吧 嚴選</Link>
            <Link className="link">清晰語音</Link>
            <Link className="link">接包吧工作區</Link>
            <Link className="link">學習吧</Link>
            <Link className="link">工作與不工作</Link>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>接包吧</h2>
            <Link className="link">© 接包吧 International Ltd. 2023</Link>
          </div>
          <div className="right">
            <div className="social">
              <a href="https://line.me/ti/p/BD3x9tgQjQ" target="_blank" rel="noreferrer noopener">
                <img src="/img/twitter.png" alt="" />
              </a>
              <a href="https://line.me/ti/p/BD3x9tgQjQ" target="_blank" rel="noreferrer noopener">
                <img src="/img/facebook.png" alt="" />
              </a>
              <a href="https://line.me/ti/p/BD3x9tgQjQ" target="_blank" rel="noreferrer noopener">
                <img src="/img/linkedin.png" alt="" />
              </a>
              <a href="https://line.me/ti/p/BD3x9tgQjQ" target="_blank" rel="noreferrer noopener">
                <img src="/img/pinterest.png" alt="" />
              </a>
              <a href="https://line.me/ti/p/BD3x9tgQjQ" target="_blank" rel="noreferrer noopener">
                <img src="/img/instagram.png" alt="" />
              </a>              
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
