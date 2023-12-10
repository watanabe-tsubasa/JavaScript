const data = {
  timeStamp: '2023/09/24 11:05',
  lineId: 'XXXXX',
  content: [{index: '0', value: 'TRUE'}]
};

baseURL = 'https://script.google.com/macros/s/AKfycbySrNjZ-_73Vbw417tLF7ANN_wQXnJHux1v86t0EP01mVcOGtIVhRcBobLhR-PnNCur5w/exec'

const main = async () => {
  const res = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  console.log(json);
}

main();