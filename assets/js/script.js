const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const myArtists = [
  412, 1155242, 75491, 4050205, 1424821, 564, 5648, 1288678, 13, 598070,
]; //Queen = 412; Salmo = 1155242; Lady Gaga = 75491; The Weeknd = 4050205; Lana Del Rey = 1424821; Rihanna = 564; Tiziano Ferro = 5648; Lazza = 1288678; Eminem = 13; Achille Lauro = 598070

let randomArtist;
let randomAlbum;
let query;
let fetchedAlbums;

//https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums

document.addEventListener("load", init());

function init() {
  randomArtist = getRandom(myArtists);
  getData(query);
}

async function getData(newQuery) {
  query = newQuery;
  try {
    let response = await fetch(createUrl(), {
      headers: {
        Authorization: apiKey,
      },
    });
    fetchedAlbums = await response.json();
    randomAlbum = getRandom(fetchedAlbums.data);
    //let dataAlbums = fetchedAlbums.data;
    //randomAlbum = getRandomAlbum();
    console.log(fetchedAlbums);
    console.log(randomAlbum);
    printData();
  } catch (error) {
    console.log(error);
  }
}

function createUrl() {
  if (!query) {
    let url = `https://striveschool-api.herokuapp.com/api/deezer/artist/${randomArtist}/albums`;
    return url;
  } else {
    let url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
    return url;
  }
}

function getRandom(arr) {
  const original = [...arr];
  console.log(arr);
  const myMusic = [];

  for (let i = 0; i < arr.length; i++) {
    const song = Math.floor(Math.random() * original.length);
    myMusic.push(original[song]);
    original.splice(song, 1);
  }
  return myMusic[0];
}

// function getRandomAlbum() {
//   let ranNum = Math.floor(Math.random() * fetchedAlbums.length);
//   randomAlbum = fetchedAlbums[ranNum];
//   return randomAlbum;
// }

function printData() {}

function playButton(){

  const btnPlay = document.getElementById('play')
  const btnStop = document.getElementById('stop')

  btnPlay.addEventListener('click', function(e){
    song.play();
  });

  btnStop.addEventListener('click', function(e){
    song.pause();
  });
}