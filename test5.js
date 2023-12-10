const Gyazo  = require('gyazo-api');
const client = new Gyazo('cimnWYlKbDzHno97OQ0yrdQDVpzA6wt8_DUvuZVAY6Q');
 
client.upload('./image.jpg', {
  title: "my picture",
  desc: "upload from nodejs"
})
.then(function(res){
  console.log(res.data.image_id);
  console.log(res.data.permalink_url);
})
.catch(function(err){
  console.error(err);
});