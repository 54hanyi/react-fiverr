import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function DropdownMenu({ style, data }) {
  return (
    <div className="menucontrol">
      <div className="menulist" style={style}>
        {data.map((section, index) => (
          <ul key={index}>
            <li>
              <p className="content">{section.title}</p>
              {section.items.map((item, idx) => (
                <Link key={idx} className="link" to={item.link}>
                  {item.label}
                </Link>
              ))}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

function Dropdown({ label, data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className="link" to="/">
        {label}
      </Link>
      {isHovered && <DropdownMenu data={data} />}
    </div>
  );
}