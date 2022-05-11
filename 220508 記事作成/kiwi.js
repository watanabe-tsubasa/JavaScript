// メインの関数
(script = document.createElement('script')).src = 'https://unpkg.com/ml5@latest/dist/ml5.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

(async function colorChange() {
    const imageModelURL = 'https://teachablemachine.withgoogle.com/models/OZcdfxibS/';
    const gold = `linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)`;
    const green = `linear-gradient(45deg, #00FF00 0%, #CCFF00 45%, #33CC66 70%, #66CC33 85%, #00CC00 90% 100%)`;
    const body = document.querySelector('article');
    const nav = document.querySelector('nav');
   
  // カメラからの映像ストリーム取得
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  
  // 「id="webcam"」となっているパーツ（videoタグ）を取得
  const video = document.getElementById('webcam');
  // videoにカメラ映像ストリームをセット
  video.srcObject = stream;
  
  // Googleのサーバーにアップロードした自作モデルを読み込みにいきます
  classifier = ml5.imageClassifier(imageModelURL + 'model.json', video, () => {
    // 読み込みが完了次第ここが実行されます
    console.log('モデルの読み込みが完了しました');
  }); 
  // 繰り返し処理
  function loop() {
    // 推論を実行し、エラーがあればerrに、結果をresultsに格納して、
    // 推論が完了次第 { } の中身を実行します
    classifier.classify(async (err, results) => {
      if (results[0].label === 'gold'){
        document.body.style.background = gold;
        body.style.background = gold;
        nav.style.background = gold;      
      } else if (results[0].label === 'green'){
        document.body.style.background = green;
        body.style.background = green;
        nav.style.background = green;        
      } else{
        document.body.style.background = '#d0d0d1';
        body.style.background = '#FFFFFF';
        nav.style.background = '#FFFFFF';
      }
      // 推論終了1秒後に自分の関数を実行（ループになる）
      setTimeout(loop, 1000);
    });
  }
  loop();
})();