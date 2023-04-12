import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const [items, setItems] = useState([]);
  const [channel, setChannel] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [video, setVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/data.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/channel.json")
      .then((res) => res.json())
      .then((data) => setChannel(data.items[0]));
  }, []);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/related.json")
      .then((res) => res.json())
      .then((data) => setRelatedVideos(data.items));
  }, []);

  //왜 find()를 생각을 못했지......
  useEffect(() => {
    const selectedVideo = items.find((item) => item.id === id);
    setVideo(selectedVideo);
  }, [items, id, video]);

  return (
    <>
      {video && channel && (
        <div className="flex pt-36 px-[6.25rem] pb-8">
          <div className="mr-10">
            <iframe
              title={video.id}
              id="player"
              width="1280"
              height="720"
              src={`http://www.youtube.com/embed/${video.id}`}
              className="mb-6"
            />
            <h2 className="text-[2rem] font-[600] mb-8">
              {video.snippet.title}
            </h2>
            <div className="flex items-start gap-5">
              <img
                className="w-[40px]"
                src={channel.snippet.thumbnails.default.url}
                alt=""
              />
              <div className="flex flex-col mb-6">
                <span className="font-medium mb-2">
                  {channel.snippet.title}
                </span>
                <span className="text-[#606060] text-[14px]">
                  구독자
                  {channel.statistics.subscriberCount}
                  만명
                </span>
              </div>
            </div>
            <p className="bg-black bg-opacity-5 p-5 rounded-2xl whitespace-pre-wrap leading-10 text-[15px]">
              {video.snippet.description}
            </p>
          </div>
          <div>
            {relatedVideos &&
              relatedVideos.map((item) => (
                <div key={item.id.videoId} className="flex mb-4 cursor-pointer">
                  <img
                    className="w-[168px] rounded-xl mr-4"
                    src={item.snippet.thumbnails.medium.url}
                    alt=""
                  />
                  <div>
                    <p className="leading-8 mb-2 text-[15px] line-clamp-2">
                      {item.snippet.title}
                    </p>
                    <span className="text-[#606060] text-[14px]">
                      {item.snippet.channelTitle}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
