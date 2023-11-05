import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { reviews } from "../../data";
import star from "./img/star.png";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <ul className="breadcrumbs">
            <li>
              <a href="">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg" alt="Fiverr" /> 
              </a>
            </li>
            <li>
              <span className="divider">/</span>
              <a href="">圖形與設計</a>
            </li>
          </ul>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>安納貝爾</span>
            <div className="stars">
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>關於這個案子</h2>
          <p>
          我使用人工智慧程式根據文字提示創建圖像。 這意味著我可以幫助您透過場景的文字描述來創建您的願景，
          而無需任何參考圖像。我發現它經常擅長的一些事情是： 人物肖像（例如與 DnD 角色搭配的圖片） 風景
          （例如壁紙、補充故事的插圖） 標誌（例如電子競技團隊、商業、個人資料圖片）模糊或描述性如您所願。
          更加模糊將使人工智慧更具創造力，有時會產生一些令人驚嘆的圖像。 如果您對自己想要的東西有清晰的
          認識，那麼您也可以非常精確。 我創建的所有圖像都是原創的，在其他地方找不到。 如果您有任何疑問，
          非常歡迎給我留言。
          </p>
          <div className="seller">
            <h2>關於賣家</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="賣家"
              />
              <div className="info">
                <span>安納貝爾</span>
                <div className="stars">
                  <img src="./img/star.png" alt="" />
                  <img src="./img/star.png" alt="" />
                  <img src="./img/star.png" alt="" />
                  <img src="./img/star.png" alt="" />
                  <img src="./img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>聯絡我</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">國籍</span>
                  <span className="desc">美國</span>
                </div>
                <div className="item">
                  <span className="title">加入會員自</span>
                  <span className="desc">2022.08</span>
                </div>
                <div className="item">
                  <span className="title">平均回復時間</span>
                  <span className="desc">6小時</span>
                </div>
                <div className="item">
                  <span className="title">最後一次成交</span>
                  <span className="desc">一天前</span>
                </div>
                <div className="item">
                  <span className="title">語言</span>
                  <span className="desc">英文</span>
                </div>
              </div>
              <hr />
              <p>
              我叫安納貝爾，喜歡在業餘時間創作人工智慧生成的藝術。
              我擁有豐富的使用人工智慧程式的經驗，這意味著我知
              道如何提示人工智慧以獲得出色且極其詳細的結果。
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>評價</h2>
            {reviews.map((review) => (
              <div className="item" key={review.id}>
                <div className="user">
                  <img className="pp" src={review.countryFlag} alt="" />
                  <div className="info">
                    <span>{review.username}</span>
                    <div className="country">
                      <img src={review.countryFlag} alt="" />
                      <span>{review.country}</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                {Array(review.stars).fill().map((_, starIndex) => (
                  <img key={starIndex} src="./img/star.png" alt="" />
                ))}
                  <span>{review.stars}</span>
                </div>
                <p>{review.reviewText}</p>
                <div className="helpful">
                  <span>評論是否對您有幫助？</span>
                  <img src="/img/like.png" alt="" />
                  <span>有的</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>不可能</span>
                </div>
              </div>
            ))}
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1個 AI 生成影像</h3>
            <h2> 59.99美金</h2>
          </div>
          <p>
            我將根據您提供的描述創建獨特的高品質 AI 生成圖像
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 天送達</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 次修訂</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>迅速寫成</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>藝術交付</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>影像放大</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>附加設計</span>
            </div>
          </div>
          <button>下一步</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
