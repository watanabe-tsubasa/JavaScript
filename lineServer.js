'use strict';

const express = require('express');
const line = require('@line/bot-sdk');

const PORT = process.env.PORT || 3000;

// Messaging APIを利用するための鍵を設定します。
const config = {
  channelSecret: '作成したBOTのチャネルシークレット',
  channelAccessToken: '作成したBOTのチャネルアクセストークン'
};

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }
  // ユーザーにリプライメッセージを送ります。
  return client.replyMessage(event.replyToken, {
    type: 'text', // テキストメッセージ
    text: event.message.text // ← ここに入れた言葉が実際に返信されます
    // event.message.text には、受信したメッセージが入っているので、それをそのまま返信しています
    // ここを 'テスト' のように書き換えると、何を受信しても「テスト」と返すようになります
  });
}

// ここ以降は理解しなくてOKです
const app = express();
app.get('/', (req, res) => res.send('Hello LINE BOT! (HTTP GET)'));
app.post('/webhook', line.middleware(config), (req, res) => {

  if (req.body.events.length === 0) {
    res.send('Hello LINE BOT! (HTTP POST)');
    console.log('検証イベントを受信しました！');
    return;
  } else {
    console.log('受信しました:', req.body.events);
  }

  Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result));
});

app.listen(PORT);
console.log(`ポート${PORT}番でExpressサーバーを実行中です…`);