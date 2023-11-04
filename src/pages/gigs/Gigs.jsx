import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales"); //初始狀態"sales"為了後端API
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
        <ul className="breadcrumbs">
          <li>
            <a href="/">
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg" alt="Fiverr" /> 
            </a>
          </li>
          <li>
            <span className="divider">/</span>
            <a href="">圖形與設計</a>
          </li>
        </ul>
        <h1>AI 藝術家</h1>
        <p>快來與 接包吧 的 AI 藝術家一起探索藝術與科技的界限</p>
        <div className="menu">
          <div className="left">
            <span>預算</span>
            <input ref={minRef} type="number" placeholder="最低金額" />
            <input ref={maxRef} type="number" placeholder="最高金額" />
            <button onClick={apply}>啟動</button>
          </div>
          <div className="right">
            <span className="sortType">
              {sort === "sales" && "Best Selling" }
              {sort === "createdAt" && "Newest" }
              {sort === "stars" && "Popular" }
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  <span onClick={() => reSort("stars")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
