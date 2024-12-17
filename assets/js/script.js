const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const myArtists = [
  412, 1155242, 75491, 4050205, 1424821, 564, 5648, 1288678, 13, 598070,
]; //Queen = 412; Salmo = 1155242; Lady Gaga = 75491; The Weeknd = 4050205; Lana Del Rey = 1424821; Rihanna = 564; Tiziano Ferro = 5648; Lazza = 1288678; Eminem = 13; Achille Lauro = 598070

const imgAlbum = document.getElementById("imgAlbum");
const albumTitle = document.getElementById("albumTitle");
const artistName = document.getElementById("artistName");

const btnToAlbum = document.getElementById("btnToAlbum");
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

const btnPlay = document.getElementById("play");
const btnStop = document.getElementById("stop");

let randomArtist;
let randomArtistName;
let randomAlbum;
let query;
let fetchedAlbums;
let dataSearched;

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
    if (!query) {
      fetchedAlbums = await response.json();
      randomAlbum = getRandom(fetchedAlbums.data);
      //let dataAlbums = fetchedAlbums.data;
      //randomAlbum = getRandomAlbum();
      console.log(fetchedAlbums);
      console.log(randomAlbum);
      printData();
    } else {
      let tempData = await response.json();
      dataSearched = tempData.data;
      console.log(dataSearched);
    }
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

function playButton() {}

btnPlay.addEventListener("click", function (e) {
  song.play();
});

btnStop.addEventListener("click", function (e) {
  song.pause();
});

function printData() {
  imgAlbum.setAttribute("src", randomAlbum.cover_medium);
  albumTitle.innerText = randomAlbum.title;
  artistName.innerText = getArtistName();
}

function getArtistName() {
  switch (randomArtist) {
    case 412:
      randomArtistName = "Queen";
      break;
    case 1155242:
      randomArtistName = "Salmo";
      break;
    case 75491:
      randomArtistName = "Lady Gaga";
      break;
    case 4050205:
      randomArtistName = "The Weeknd";
      break;
    case 1424821:
      randomArtistName = "Lana Del Rey ";
      break;
    case 564:
      randomArtistName = "Rihanna";
      break;
    case 5648:
      randomArtistName = "Tiziano Ferro";
      break;
    case 1288678:
      randomArtistName = "Lazza";
      break;
    case 13:
      randomArtistName = "Eminem";
      break;
    case 598070:
      randomArtistName = "Achille Lauro";
      break;
  }
  return randomArtistName;
}

btnToAlbum.addEventListener("click", (e) => {
  e.preventDefault();
  let secondPage = "album.html";
  let newUrl = `${secondPage}?_album-id=${randomAlbum.id}`;
  window.location.href = newUrl;
});

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = inputSearch.value;
  //getData(inputValue);
  let secondPage = "artist.html";
  let newUrl = `${secondPage}?_searched-query=${inputValue}`;
  window.location.href = newUrl;
});
