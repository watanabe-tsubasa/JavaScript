const MusicBrainzApi = require('musicbrainz-api').MusicBrainzApi;

const config = {
  // MusicBrainz bot account username & password (optional)
  // botAccount: { 
  //   username: 'myUserName_bot',
  //   password: 'myPassword' 
  // },
  
  // API base URL, default: 'https://musicbrainz.org' (optional)
  baseUrl: 'https://musicbrainz.org',

  appName: 'my-app',
  appVersion: '0.1.0',

  // Optional, default: no proxy server
  // proxy: {
  //   host: 'localhost',
  //   port: 8888
  //  },

  // Your e-mail address, required for submitting ISRCs
  appMail: 't.watanabe423@gmail.com'
}

const mbApi = new MusicbrainzApi(config);