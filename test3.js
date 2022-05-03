
const axios = require('axios');
const handleEvent = async (event) => {

let itemNumber;
itemNumber = Math.floor(Math.random() * 50) //0～49の整数をランダムで返す
//Math.random(): 0～1の乱数を発生させる
//これを50倍して
//Math.floor(): ()の中を切り捨て → 

let response;
try {
  const YoutubeAPIKey = 'AIzaSyBoL7z8UF-ZhYk0P9Br5EUcNZpMVz2rILE'
  response = await axios.get('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=50&q=' + encodeURIComponent('宮城由香') + '&key=' + YoutubeAPIKey );//宮城由香の検索結果を50件返す
    console.log(itemNumber);
    console.log(response.data.items[itemNumber]);//{itemNumber}番目の動画データが取得される
    console.log(response.data.items[itemNumber].id.videoId);//取得した動画データのvideoIdが取得される
    console.log(`https://www.youtube.com/watch?v=${response.data.items[itemNumber].id.videoId}`); //https://www.youtube.com/watch?v=の後にid付けて動画url化
} catch (error) {
  console.error(error);
}
}

handleEvent()
