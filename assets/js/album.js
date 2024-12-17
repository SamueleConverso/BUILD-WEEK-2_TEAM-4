const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const url = new URLSearchParams(window.location.search);
const albumId = url.get("_album-id");

const albumUrl = `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`;

const imgAlbumTop = document.getElementById("imgAlbumTop");
const albumTitleTop = document.getElementById("albumTitleTop");
const artistNameTop = document.getElementById("artistNameTop");

let album;
let tracks;

document.addEventListener("load", init());

function init() {
  getData();
}

async function getData() {
  try {
    let response = await fetch(albumUrl, {
      headers: {
        Authorization: apiKey,
      },
    });
    album = await response.json();
    tracks = album.tracks.data;
    console.log(album);
    console.log(tracks);
    printData();
  } catch (error) {
    console.log(error);
  }
}

function printData() {
  imgAlbumTop.setAttribute("src", album.cover_medium);
  albumTitleTop.innerText = album.title;
  //artistNameTop.innerText = getArtistName();
  for (let i = 0; i < tracks.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = tracks[i].title;
  }
}
