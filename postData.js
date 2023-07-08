const axios = require('axios');

const data = {
    userId: "test2",
    speechLog: ["a", "b"]
};

const main = async () => {
    const res = await axios.post("http://localhost:8000/api/v1", data); // リクエストボディを { data } として送信する
    console.log(res.data);
};

main();
