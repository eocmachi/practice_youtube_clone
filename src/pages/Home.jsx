import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchTrendVideos } from "../hooks/queries/youtube";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const onNavigate = (id) => {
    navigate(`/videos/watch/${id}`);
  };
  const queryfetch = useQuery(["videos"], fetchTrendVideos, {
    onSuccess: (data) => setItems(data.items),
  });

  return (
    <div className="grid grid-cols-5 px-[6.25rem] pt-36 gap-8 pb-8">
      {items &&
        items.map((item) => (
          <div
            className="mb-3 cursor-pointer"
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
            }}
          >
            <img
              className="w-full mb-4 rounded-2xl"
              src={item.snippet.thumbnails.medium.url}
              alt=""
            />
            <p className="mb-3 font-medium leading-10 line-clamp-2">
              {item.snippet.title}
            </p>
            <p className="mb-3 text-[14px] text-[#606060]">
              {item.snippet.channelTitle}
            </p>
            <span className=" text-[14px] text-[#606060]">
              {item.statistics.viewCount}만회
            </span>
          </div>
        ))}
    </div>
  );
}
