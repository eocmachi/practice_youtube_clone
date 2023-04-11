import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const [items, setItems] = useState([]);
  const [video, setVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/data.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  //왜 find()를 생각을 못했지......
  useEffect(() => {
    const selectedVideo = items.find((item) => item.id === id);
    setVideo(selectedVideo);
  }, [items, id]);

  return (
    <div>
      {video && <img src={video.snippet.thumbnails.medium.url} alt="" />}
    </div>
  );
}
