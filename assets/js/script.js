const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const myArtists = [
  412, 1155242, 75491, 4050205, 1424821, 564, 5648, 1288678, 13, 598070,
]; //Queen = 412; Salmo = 1155242; Lady Gaga = 75491; The Weeknd = 4050205; Lana Del Rey = 1424821; Rihanna = 564; Tiziano Ferro = 5648; Lazza = 1288678; Eminem = 13; Achille Lauro = 598070

let randomArtist;
let randomAlbum;

document.addEventListener("load", init());

function init() {
  getData();
  randomArtist = getRandomArtist();
}

async function getData() {
  try {
    let response = await fetch(createUrl(), {
      headers: {
        Authorization: apiKey,
      },
    });
    randomAlbum = await response.json();
    console.log(randomAlbum);
    printData();
  } catch (error) {
    console.log(error);
  }
}

function createUrl() {
  if (!query) {
    return "https://api.pexels.com/v1/search?query=mountain&per_page=9";
  } else {
    url = `https://api.pexels.com/v1/search?query=${query}&per_page=9`;
    return url;
  }
}

function getRandomArtist(arr) {
  const originalArtist = [...arr];
  const myArtist = [];

  for (let i = 0; i < arr.length; i++) {
    const artist = Math.floor(Math.random() * originalArtist.length);
    myArtist.push(originalArtist[artist]);
    originalArtist.splice(artist, 1);
  }
  return myArtist[0];
}
