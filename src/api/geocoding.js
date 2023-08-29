export default async function getMapLocation(address) {
  const API_KEY = 'pk.369bd965a1bbaad8fed124b3d703a15a';
  const query = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${address}&format=json`;
  return fetch(query)
    .then((data) => data.json())
    .then((dataJson) => dataJson[0].boundingbox);
}
