import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import head from "/img/head.png";
import languageImg from "/img/language.png";
import down from "/img/down.png";
import close from "/img/close.png";
import Dropdown from "../DropdownMenu/DropdownMenu";
import { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, } from "../../menuData";

function Navbar() {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [vipOpen, setVipOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("繁體中文");
  

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);


  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  // 監聽是否向下滾動頁面以切換active
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // 開啟其他menu後關閉現在開啟的menu
  useEffect(() => {
    if (vipOpen) {
      setExpOpen(false);
      setMenuOpen(false);
    }
  }, [vipOpen]);
  
  useEffect(() => {
    if (expOpen) {
      setVipOpen(false);
      setMenuOpen(false);
    }
  }, [expOpen]);

  useEffect(() => {
    if (menuOpen) {
      setVipOpen(false);
      setExpOpen(false);
    }
  }, [menuOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setVipOpen(false);
    setExpOpen(false);
  };
  // 監聽用戶是否有點擊其他地區以觸發closeMenus
  useEffect(() => {
    document.addEventListener("click", closeMenus);
    return () => {
      // 刪除先前新增的點擊事件監聽器，以確保在元件卸載後不再觸發closeMenus函數
      document.removeEventListener("click", closeMenus);
    };
  }, []);

  const handleClick = (event, menuType) => {
    event.stopPropagation();
    if (menuType === "menu") {
      setMenuOpen(!menuOpen);
    } else if (menuType === "vip") {
      setVipOpen(!vipOpen);
    } else if (menuType === "exp") {
      setExpOpen(!expOpen);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setLanguage(true);
  };

  // const currentUser = null
  const currentUser = {
    id: 1,
    username: "陳翰毅",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">接包吧</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span onClick={(event) => handleClick(event, "vip")}>商務解決方案<img src={down}></img></span>
          {vipOpen && 
          <div className="VipOptions" >
            <Link className="link" to="/">
              <div className="title">接包吧 PRO</div>
              <div className="desc">適用於任何專案的頂級自由工作者和專業商業工具</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">接包吧 認證</div>
              <div className="desc">您自己的認證專家品牌市場</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">接包企業</div>
              <div className="desc">SaaS來管理您的自由工作者隊伍和培養額外人才</div>
            </Link>
          </div>}
          <span onClick={(event) => handleClick(event, "exp")}>探索<img src={down}></img></span>
          {expOpen && 
          <div className="ExpOptions">
            <Link className="link" to="/">
              <div className="title">發現</div>
              <div className="desc">接包吧 上鼓舞人心的項目</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">社群</div>
              <div className="desc">與 接包吧 的團隊和社群聯繫</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">指南</div>
              <div className="desc">涵蓋商業主題的深度指南</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">Podcast</div>
              <div className="desc">來自頂尖商業頭腦的內幕秘訣</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">學習</div>
              <div className="desc">專業線上課程，專業授課</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">部落格</div>
              <div className="desc">新聞、資訊和社群故事</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">標誌製作者</div>
              <div className="desc">立即建立您的標誌</div>
            </Link>
            <Link className="link" to="/">
              <div className="title">接包吧 工作空間</div>
              <div className="desc">一站式管理您的業務</div>
            </Link>
          </div>}
          <span onClick={openModal}><img src={languageImg}/>{selectedLanguage}</span>
          {modalOpen && 
            <div className="modal">
              <div className="content">
                <div className="title">
                  <h2>選擇您的喜好：</h2>
                  <img src={close} alt="" onClick={closeModal}/>
                </div>
                  <ul>
                    <li onClick={() => setLanguage(true)}>語言</li>
                    <li onClick={() => setLanguage(false)}>幣值</li>
                  </ul>
                  <ul className="section">
                  { language ? (
                    <>
                    <li><Link to="/" className="link" onClick={closeModal}>繁體中文</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>English</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>简体中文</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>爬蟲語</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>粵語</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>Français</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>español</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>한국어</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>日本語</Link></li>
                    </>
                  ) : (
                    <>
                    <li><Link to="/" className="link" onClick={closeModal}>新台幣</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>美元</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>人民幣</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>傻幣</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>歐元</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>雪幣</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>雷幣</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>韓元</Link></li>
                    <li><Link to="/" className="link" onClick={closeModal}>日幣</Link></li>
                    </>
                  )}
                  </ul>
              </div>
            </div>
          }
          {!currentUser?.isSeller && <span>成為賣家</span>}
          {currentUser ? (
            <div className="user" onClick={(event) => handleClick(event, "menu")}>
              <img
                src={head}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {menuOpen && 
              <div className="MenuOptions">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      我的方案
                    </Link>
                    <Link className="link" to="/add">
                      新增方案
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  訂單
                </Link>
                <Link className="link" to="/messages">
                  訊息
                </Link>
                <Link className="link" to="/">
                  登出
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>登入</span>
              <Link className="link" to="/register">
                <button>加入</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <div className="menu-section">
              <Link className="link" to="/">
                圖形與設計
              </Link>
              <Dropdown label="圖形與設計" data={data1} isHovered={isHovered1} setIsHovered={setIsHovered1} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                程式設計與技術
              </Link>
              <Dropdown style={{ left: '16rem' }} label="程式設計與技術" data={data2} isHovered={isHovered2} setIsHovered={setIsHovered2} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                數位行銷
              </Link>
              <Dropdown style={{ left: '26rem' }} label="數位行銷" data={data3} isHovered={isHovered3} setIsHovered={setIsHovered3} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                影片與動畫
              </Link>
              <Dropdown style={{ left: '33.5rem' }} label="影片與動畫" data={data4} isHovered={isHovered4} setIsHovered={setIsHovered4} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                寫作與翻譯
              </Link>
              <Dropdown style={{ left: '42rem' }} label="寫作與翻譯" data={data5} isHovered={isHovered5} setIsHovered={setIsHovered5} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                音樂與音訊
              </Link>
              <Dropdown style={{ left: '45rem' }} label="音樂與音訊" data={data6} isHovered={isHovered6} setIsHovered={setIsHovered6} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                商業
              </Link>
              <Dropdown style={{ left: '49rem' }} label="商業" data={data7} isHovered={isHovered7} setIsHovered={setIsHovered7} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                數據
              </Link>
              <Dropdown style={{ left: '55rem' }} label="數據" data={data8} isHovered={isHovered8} setIsHovered={setIsHovered8} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                攝影
              </Link>
              <Dropdown style={{ left: '57rem' }} label="攝影" data={data9} isHovered={isHovered9} setIsHovered={setIsHovered9} />
            </div>

            <div className="menu-section">
              <Link className="link" to="/">
                AI服務
              </Link>
              <Dropdown style={{ left: '50rem' }} label="AI服務" data={data10} isHovered={isHovered10} setIsHovered={setIsHovered10} />
            </div>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
