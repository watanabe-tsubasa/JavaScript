
const axios = require('axios');
const handleEvent = async (event) => {

let response;
let itemNumber;
itemNumber = Math.floor(Math.random*10)

try {
  const YoutubeAPIKey = 'AIzaSyBoL7z8UF-ZhYk0P9Br5EUcNZpMVz2rILE'
  response = await axios.get('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=60&q=' + encodeURIComponent('宮城由香') + '&key=' + YoutubeAPIKey );
  console.log(response.data.items.length);
} catch (error) {
  console.error(error);
}
}

handleEvent()