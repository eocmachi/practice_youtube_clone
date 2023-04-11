import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const onNavigate = (id) => {
    navigate(`/videos/watch/${id}`);
  };
  fetch(process.env.PUBLIC_URL + "/data/data.json")
    .then((res) => res.json())
    .then((data) => setItems(data.items));
  return (
    <div className="grid grid-cols-4 px-16 pt-36 gap-9">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            onNavigate(item.id);
          }}
        >
          <img
            className="m-auto mb-4 rounded-2xl"
            src={item.snippet.thumbnails.medium.url}
            alt=""
          />
          <p className="mb-3 font-medium leading-10 line-clamp-2">
            {item.snippet.title}
          </p>
          <p className="text-[14px] text-[#606060]">
            {item.snippet.channelTitle}
          </p>
        </div>
      ))}
    </div>
  );
}
