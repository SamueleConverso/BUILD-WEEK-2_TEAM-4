const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const url = new URLSearchParams(window.location.search);
const query = url.get("_searched-query");
const artistId = url.get("_artist-id");

const artistNameLastPage = document.getElementById("artistNameLastPage");
const artistAlbumsListLastPage = document.getElementById(
  "artistAlbumsListLastPage"
);

let albums;

document.addEventListener("load", init());

function init() {
  getData();
}

async function getData() {
  try {
    let response = await fetch(createUrl(), {
      headers: {
        Authorization: apiKey,
      },
    });
    if (!checkQuery()) {
      let tempData = await response.json();
      albums = tempData.data;
      console.log(albums);
      printArtist();
    } else {
      //   tracks = album.tracks.data;
      //   console.log(tracks);
      //   printQuery();
    }
  } catch (error) {
    console.log(error);
  }
}

function checkQuery() {
  if (query) {
    return true;
  } else {
    return false;
  }
}

function createUrl() {
  if (checkQuery) {
    let fetchUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
    return fetchUrl;
  } else {
    let fetchUrl = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/albums`;
    return fetchUrl;
  }
}

function printArtist() {
  artistNameLastPage.innerText = albums[0].artist.name;

  for (let i = 0; i < albums.length; i++) {
    let newLi = document.createElement("li");
  }
}
