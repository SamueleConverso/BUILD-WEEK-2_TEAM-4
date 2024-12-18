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
const artistCover = document.getElementById("artistCover");

let albums;
let artistName;
let tracks;

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
      let tempData = await response.json();
      tracks = tempData.data;
      console.log(tracks);
      printQuery();
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
  if (checkQuery()) {
    let fetchUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
    return fetchUrl;
  } else {
    let fetchUrl = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/albums`;
    return fetchUrl;
  }
}

function printArtist() {
  artistNameLastPage.innerText = getArtistName();
  artistCover.setAttribute("src", getArtistPhoto());
  for (let i = 0; i < albums.length; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-between",
      "w-100",
      "col-lg-1"
    );
    newLi.innerHTML = `
                          <img
                            class="col-2"
                            src="assets/imgs/search/image-1.jpeg"
                            alt="songOne"
                          />
                          <a class="col-6 text-decoration-none text-white" href="album.html?_album-id=${albums[i].id}">${albums[i].title}</a>
                          <p class="col-2">183.811.268</p>
                          <p class="col-1">${albums[i].fans} fan</p>
                        
                        `;
    artistAlbumsListLastPage.appendChild(newLi);
  }
}

function printQuery() {
  artistNameLastPage.innerText = `Hai cercato: "${query}"`;
  artistNameLastPage.style.color = "yellow";
  artistCover.setAttribute("src", "assets/imgs/search/image-21.jpg");
  for (let i = 0; i < tracks.length; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-between",
      "w-100",
      "col-lg-1"
    );

    let duration = (tracks[i].duration / 60).toFixed(2);
    newLi.innerHTML = `
                          <img
                            class="col-2"
                            src=${tracks[i].album.cover_small}
                            alt="songOne"
                          />
                          <div class="col-6 ">
                          <a class="text-decoration-none text-white">${tracks[i].title}</a>
                          <p>${tracks[i].artist.name}</p>
                          </div>
                          <p class="col-2">183.811.268</p>
                          <p class="col-1">${duration}</p>
                        
                        `;
    artistAlbumsListLastPage.appendChild(newLi);
  }
}

function getArtistName() {
  switch (artistId) {
    case "412":
      artistName = "Queen";
      break;
    case "1155242":
      artistName = "Salmo";
      break;
    case "75491":
      artistName = "Lady Gaga";
      break;
    case "4050205":
      artistName = "The Weeknd";
      break;
    case "1424821":
      artistName = "Lana Del Rey";
      break;
    case "564":
      artistName = "Rihanna";
      break;
    case "5648":
      artistName = "Tiziano Ferro";
      break;
    case "1288678":
      artistName = "Lazza";
      break;
    case "13":
      artistName = "Eminem";
      break;
    case "598070":
      artistName = "Achille Lauro";
      break;
  }
  return artistName;
}

function getArtistPhoto() {
  let artistPhoto;
  switch (artistName) {
    case "Queen":
      artistPhoto = "assets/imgs/artists/queen.jpg";
      break;
    case "Salmo":
      artistPhoto = "assets/imgs/artists/salmo.jpg";
      break;
    case "Lady Gaga":
      artistPhoto = "assets/imgs/artists/ladyGaga.jpg";
      break;
    case "The Weeknd":
      artistPhoto = "assets/imgs/artists/theWeeknd.jpg";
      break;
    case "Lana Del Rey":
      artistPhoto = "assets/imgs/artists/lanaDelRey.jpg";
      break;
    case "Rihanna":
      artistPhoto = "assets/imgs/artists/rihanna.jpg";
      break;
    case "Tiziano Ferro":
      artistPhoto = "assets/imgs/artists/tizianoFerro.jpg";
      break;
    case "Lazza":
      artistPhoto = "assets/imgs/artists/lazza.jpg";
      break;
    case "Eminem":
      artistPhoto = "assets/imgs/artists/eminem.jpg";
      break;
    case "Achille Lauro":
      artistPhoto = "assets/imgs/artists/achilleLauro.jpg";
      break;
  }
  return artistPhoto;
}
