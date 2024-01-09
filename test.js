(async () => {
  const MusicBrainzApi = (await import('musicbrainz-api')).MusicBrainzApi;

  const config = require('./config');
  const mbApi = new MusicBrainzApi(config);

  const main = async () => {
    const artist = await mbApi.lookup('artist', 'ab2528d9-719f-4261-8098-21849222a0f2');
    console.log(artist);
  }

  main();
})();
