const requestOptions = {
  method: "GET",
  redirect: "follow",
};

export async function fetchTrendVideos() {
  return fetch(process.env.PUBLIC_URL + "/data/data.json").then((response) =>
    response.json()
  );
}

export async function fetchRelatedVideos() {
  return fetch(process.env.PUBLIC_URL + "/data/related.json").then((response) =>
    response.json()
  );
}

export async function fetchChannel() {
  return fetch(process.env.PUBLIC_URL + "/data/channel.json").then((response) =>
    response.json()
  );
}

// 실시간 데이터 요청
// export async function fetchTrendVideos() {
//   return fetch(
//     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyCYV75kVu8Wb_E925yz8rjZTcTcx3ULeYY",
//     requestOptions
//   ).then((response) => response.json());
// }

// export async function fetchRelatedVideos(id) {
//   return fetch(
//     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=25&key=AIzaSyCYV75kVu8Wb_E925yz8rjZTcTcx3ULeYY`,
//     requestOptions
//   ).then((response) => response.json());
// }

// export async function fetchChannel() {
//   return fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCYDmx2Sfpnaxg488yBpZIGg&key=AIzaSyCYV75kVu8Wb_E925yz8rjZTcTcx3ULeYY", requestOptions).then((response) =>
//     response.json()
//   );
// }
