const BASE_URL = 'https://api.thecatapi.com/v1';
const RESOURSE_BREEDS = '/breeds';
const RESOURSE_CAT = '/images/search';
const API_KEY =
  'live_tgsIWJTuPbRzEV3ipYpnDtfu0sRI0UVpPSrBqmxqCOqxj6txm6V1SE3oTS3Gd36f ';

function fetchBreeds() {
  const url = `${BASE_URL}${RESOURSE_BREEDS}?api_key=${API_KEY}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

function fetchCat(id) {
  const idCat = `breed_ids=${id}`;
  const urlForSearch = `${BASE_URL}${RESOURSE_CAT}?${idCat}&api_key=${API_KEY}`;
  return fetch(urlForSearch).then(response => {
    return response.json();
  });
}

export { fetchBreeds, fetchCat };
