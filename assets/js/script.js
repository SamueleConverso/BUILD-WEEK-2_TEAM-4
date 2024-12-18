const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";
const myArtists = [
  412, 1155242, 75491, 4050205, 1424821, 564, 5648, 1288678, 13, 598070,
]; //Queen = 412; Salmo = 1155242; Lady Gaga = 75491; The Weeknd = 4050205; Lana Del Rey = 1424821; Rihanna = 564; Tiziano Ferro = 5648; Lazza = 1288678; Eminem = 13; Achille Lauro = 598070

const imgAlbum = document.getElementById("imgAlbum");
const albumTitle = document.getElementById("albumTitle");
const artistName = document.getElementById("artistName");

const songName = document.getElementById("songName");
const albumTitlePlayer = document.getElementById("albumTitlePlayer");
const imgAlbumPlayer = document.getElementById("imgAlbumPlayer");

const progressBar = document.getElementById("seekBar");

const btnToAlbum = document.getElementById("btnToAlbum");
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");


const playButton = document.getElementById('btnPlay');

// const btnPlay = document.getElementById("play");
// const btnStop = document.getElementById("stop");

let randomArtist;
let randomArtistName;
let randomAlbum;
let query;
let fetchedAlbums;
let dataSearched;
let albumId;
let album;
let pressed = false;
let track;
let song;
//let track = new Audio(song);
let mouseDownOnSlider = false;

//https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums

document.addEventListener("load", init());

function init() {
  randomArtist = getRandom(myArtists);
  artistName.setAttribute("href", `artist.html?_artist-id=${randomArtist}`);
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
      albumId = randomAlbum.id;
      //console.log(albumId);
      //let dataAlbums = fetchedAlbums.data;
      //randomAlbum = getRandomAlbum();
      //console.log(fetchedAlbums);
      console.log(randomAlbum);
      printData();
    } else {
      let tempData = await response.json();
      dataSearched = tempData.data;
      //console.log(dataSearched);
    }
    getTrack();
  } catch (error) {
    console.log(error);
  }
}

function createUrl() {
  if (!query) {
    let url = `https://striveschool-api.herokuapp.com/api/deezer/artist/${randomArtist}/albums`;
    return url;
  }else{
    let url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
    return url;
  }
}

function getRandom(arr) {
  const original = [...arr];
  //console.log(arr);
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

playButton.addEventListener('click', (e) => {
  e.preventDefault();
  //console.log(pressed);
  switch (pressed){
    case true:
      pauseSong(track);
      pressed = false;
      //console.log(pressed);
    break;
    case false:
      playSong(track);
      pressed = true;
      //console.log(pressed);
    break;
  }
});

function playSong(track){
  //console.log(song);
  track.play();
  console.log(track);
}

function pauseSong(track){
  //console.log(song);
  track.pause();
  console.log(track);
}

async function getTrack() {
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`, {
      headers: {
        Authorization: apiKey,
      },
    });
    album = await response.json();
    console.log(album);
    song = album.tracks.data[0].preview;
    track = new Audio(song);
    progressTrack()
    //console.log(song);
    //console.log(track);
    printTrack();
  } catch (error) {
    console.log(error);
  }
}

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
      randomArtistName = "Lana Del Rey";
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

function printTrack(){
  imgAlbumPlayer.setAttribute("src", randomAlbum.cover_small);
  songName.innerText = album.tracks.data[0].title;
  artistNamePlayer.innerText = getArtistName();
}

function progressTrack(){
  track.addEventListener('loadeddata', () => {
    progressBar.value=0;
  })
  track.addEventListener('timeupdate', () => {
    if (!mouseDownOnSlider) {
      progressBar.value = track.currentTime / track.duration * 100;
    }
  });
  progressBar.addEventListener("change", () => {
    const pct = progressBar.value / 100;
    track.currentTime = (track.duration || 0) * pct;
  });
  progressBar.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
  });
  progressBar.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
  });
}
