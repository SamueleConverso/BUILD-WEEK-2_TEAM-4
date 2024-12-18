const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const url = new URLSearchParams(window.location.search);
const albumId = url.get("_album-id");

const albumUrl = `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`;

const imgAlbumTop = document.getElementById("imgAlbumTop");
const albumTitleTop = document.getElementById("albumTitleTop");
const artistNameTop = document.getElementById("artistNameTop");
const imgAlbumDown = document.getElementById("imgAlbumDown");
const albumTitleDown = document.getElementById("albumTitleDown");
const artistNameDown = document.getElementById("artistNameDown");
const trackList = document.getElementById("trackList");

let album;
let tracks;
let artistName;

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
    artistName = album.artist.name;
    console.log(album);
    console.log(tracks);
    console.log(artistName);
    printData();
  } catch (error) {
    console.log(error);
  }
}

function printData() {
  imgAlbumTop.setAttribute("src", album.cover_medium);
  albumTitleTop.innerText = album.title;
  imgAlbumDown.setAttribute("src", album.cover_medium);
  albumTitleDown.innerText = album.title;
  artistNameDown.innerHTML = `
  <img src="${getArtistPhoto()}" alt="Logo singer" class="mx-2"/>
                <p>${artistName}</p>
  `;
  artistNameTop.innerHTML = `
  <img
                      src="${getArtistPhoto()}"
                      class="immagineProfiloMusica"
                      alt=""
                    />${artistName}
  `;
  //artistNameTop.innerText = getArtistName();
  for (let i = 0; i < tracks.length; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-around",
      "w-100",
      "m-0"
    );
    let duration = (tracks[i].duration / 60).toFixed(2);
    newLi.innerHTML = `
                  <div class="col-5 titleSong">
                    <p class="fw-bold mb-1">${tracks[i].title}</p>
                    <p class="fw-lighter mb-1">${artistName}</p>
                  </div>
                  <p class="col-3">122.631.768</p>
                  <p class="col-1 text-end">${duration} s</p>
                
    `;
    trackList.appendChild(newLi);
  }
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
