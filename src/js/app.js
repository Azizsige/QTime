const API_KEY = "0407909af3830d4ca4556ca68266735f";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel/dist/owl.carousel.min.js";
import "owl.carousel";
import $ from "jquery";
const loading = document.getElementById("loading");

document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    loading.classList.toggle("hidden");
  }
};

let storeTranding = [];
let storeMovie = [];
let storeTv = [];
const allCont = document.getElementById("all");
const moviesCont = document.getElementById("movies");
const tvsCont = document.getElementById("tvShows");

$(document).ready(function () {
  $(".owl-jumbo").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-now").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-popular").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-air").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

const tabsBtn = document.querySelectorAll(".tabs-btn");

tabsBtn.forEach((element) => {
  element.addEventListener("click", function () {
    tabsBtn.forEach((tab) =>
      tab.classList.remove("bg-[#7B6EF6]", "text-[#8E95A9]")
    );

    this.classList.add("bg-[#7B6EF6]", "text-white");
    this.classList.remove("text-[#8E95A9]");
  });
});

async function getTrending() {
  let all_type = document.getElementById("all_type");
  let loader = document.querySelector(".loader");

  const media_type = ["all", "movie", "tv"];
  let randomMedia = Math.floor(Math.random() * 3);

  all_type.innerHTML = media_type[randomMedia].toLocaleUpperCase();

  const url = await fetch(API_TRENDING);
  const datas = await url.json();

  loader.style.display = "none";

  renderTrending(datas.results);
  getDetailsTrending(media_type[randomMedia]);
}

function getMoviesNow() {
  return fetch(API_MOVIES_NOW)
    .then((response) => response.json())
    .then((data) => data.results);
}

function getMoviesPopular() {
  return fetch(API_MOVIES_POPULAR)
    .then((response) => response.json())
    .then((data) => data.results);
}

function getMoviesOnAir() {
  return fetch(API_MOVIES_UPCOMING)
    .then((response) => response.json())
    .then((data) => data.results);
}

async function renderTrending(data) {
  const trending = document.getElementById("trending");
  trending.innerHTML = "";
  const random = Math.floor(Math.random() * (data.length - 1) + 1);
  await data.slice(random, random + 8).forEach((datas) => {
    let rating = Math.round(datas.vote_average * 10) / 10;
    if (datas.original_title == undefined) {
      trending.innerHTML += `
      <div id="${datas.id}" data-media-type="${datas.media_type}"
      class="movie w-[8rem] shadow-2xl h-full relative z-10 sm:w-[8rem] hover:cursor-pointer sm:h-full lg:w-[13rem] xl:w-[13rem] xl:h-full 2xl:w-[19rem] mt-8 sm:mt-12 xl:mt-12 2xl:mt-20"
    >
      <div id="${datas.id}" data-media-type="${datas.media_type}" class="movies movies--all bg-cardMovies rounded-xl">
        <div id="${datas.id}" data-media-type="${datas.media_type}" class="movies-image p-2">
          <img
            src="${API_IMAGE}${datas.poster_path}"
            alt=""
            class="rounded-xl"
          />
          <div class="px-[0.5rem] xl:px-5 w-auto absolute top-4 xl:top-5 bg-cardRating left-4 xl:left-5 py-1 rounded-lg text-rating font-bold text-[12px] sm:text-base">
          <i class="far fa-star"></i>
          <span>${rating}</span>
          </div>
        </div>
        <div id="${datas.id}" data-media-type="${datas.media_type}"
          class="movies-title text-movieTitle p-3 xl:p-[1.75rem] text-[12px] xl:text-[20px]"
        >
          <h6 class="hover:text-[#9C92F8] xl:text-[16px] ">${datas.name}</h6>
        </div>
      </div>
    </div>
      `;
    } else if (datas.name == undefined) {
      trending.innerHTML += `
      <div id="${datas.id}" data-media-type="${datas.media_type}"
      class="movie w-[8rem]  hover:cursor-pointer relative z-10 shadow-2xl h-full sm:w-[8rem] sm:h-full lg:w-[13rem] xl:w-[13rem] xl:h-full 2xl:w-[19rem] mt-8 sm:mt-12 xl:mt-12 2xl:mt-20"
    >
      <div id="${datas.id}" data-media-type="${datas.media_type}" class="movies movies--all bg-cardMovies rounded-xl">
        <div id="${datas.id}" data-media-type="${datas.media_type}" class="movies-image p-2">
        <img id="${datas.id}"
        src="${API_IMAGE}${datas.poster_path}"
        alt=""
        class="rounded-xl"
      />
      <div class="px-[0.5rem] xl:px-5 w-auto absolute top-4 xl:top-5 bg-cardRating left-4 xl:left-5 py-1 rounded-lg text-rating font-bold text-[12px] sm:text-base">
      <i class="far fa-star"></i>
      <span>${rating}</span>
      </div>
        </div>
        <div id="${datas.id}" data-media-type="${datas.media_type}"
          class="movies-title text-movieTitle p-3 xl:p-[1.75rem] text-[12px] xl:text-[20px]"
        >
          <h6 class="hover:text-[#9C92F8] xl:text-[16px] ">${datas.original_title}</h6>
        </div>
      </div>
    </div>
      `;
    }
  });
}

function renderMoviesNow() {
  const renderMoviesNow = getMoviesNow();
  const imageNow = document.querySelectorAll(".movies-image__now");
  const imageNowTitle = document.querySelectorAll(".movies-now__title");
  let movieRating = document.querySelectorAll("#movieRating");
  let movieNow_id = document.querySelectorAll(".movies-image");
  let movieNow_id2 = document.querySelectorAll(".movies-title");
  renderMoviesNow.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      let rating = Math.round(data.vote_average * 10) / 10;
      imageNow[index].src = `${API_IMAGE}${data.poster_path}`;
      imageNowTitle[index].innerText = `${data.original_title}`;
      movieNow_id[index].id = data.id;
      movieNow_id2[index].id = data.id;
      movieRating[index].innerText = rating;
    });
  });
}

function renderMoviesPopular() {
  const renderMoviesPopular = getMoviesPopular();
  const imagePopular = document.querySelectorAll(".movies-image__popular");
  const imagePopularTitle = document.querySelectorAll(".movies-popular__title");
  let moviePopularRating = document.querySelectorAll("#moviePopularRating");
  let moviePop_id = document.querySelectorAll(".moviesPop-image");
  let moviePop_id2 = document.querySelectorAll(".moviesPop-title");
  renderMoviesPopular.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      let rating = Math.round(data.vote_average * 10) / 10;
      imagePopular[index].src = `${API_IMAGE}${data.poster_path}`;
      imagePopularTitle[index].innerText = `${data.original_title}`;
      moviePop_id[index].id = data.id;
      moviePop_id2[index].id = data.id;
      moviePopularRating[index].innerText = rating;
    });
  });
}
function renderMoviesOnAir() {
  const renderMoviesOnAir = getMoviesOnAir();
  const imageOnAir = document.querySelectorAll(".movies-image__OnAir");
  const imageOnAirTitle = document.querySelectorAll(".movies-OnAir__title");
  let movieOnAir_id = document.querySelectorAll(".moviesOnAir-image");
  let movieOnAir_id2 = document.querySelectorAll(".moviesOnAir-title");
  let movieOnAirRating = document.querySelectorAll("#movieOnAirRating");
  renderMoviesOnAir.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      let rating = Math.round(data.vote_average * 10) / 10;
      imageOnAir[index].src = `${API_IMAGE}${data.poster_path}`;
      imageOnAirTitle[index].innerText = `${data.original_title}`;
      movieOnAir_id[index].id = data.id;
      movieOnAir_id2[index].id = data.id;
      movieOnAirRating[index].innerText = rating;
    });
  });
}

function getTvPopular() {
  return fetch(API_TV_POPULAR)
    .then((response) => response.json())
    .then((data) => data.results);
}

function renderTvPopular() {
  const renderTvPopular = getTvPopular();
  const imageTvPop = document.querySelectorAll(".movies-image__TvPop");
  const imageTvPopTitle = document.querySelectorAll(".movies-TvPop__title");
  let tvRating = document.querySelectorAll("#tvRating");
  let tvPop_id = document.querySelectorAll(".tvPop-image");
  let tvPop_id2 = document.querySelectorAll(".tvPop-title");
  renderTvPopular.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      let rating = Math.round(data.vote_average * 10) / 10;
      imageTvPop[index].src = `${API_IMAGE}${data.poster_path}`;
      imageTvPopTitle[index].innerText = `${data.name}`;
      tvPop_id[index].id = data.id;
      tvPop_id2[index].id = data.id;
      tvRating[index].innerText = rating;
    });
  });
}

function getTvAiring() {
  return fetch(API_TV_AIRING)
    .then((response) => response.json())
    .then((data) => data.results);
}

function renderTvAiring() {
  const renderTvAiring = getTvAiring();
  const imageTvAiring = document.querySelectorAll(".movies-image__TvAiring");
  const imageTvAiringTitle = document.querySelectorAll(
    ".movies-TvAiring__title"
  );
  let tvAiring_id = document.querySelectorAll(".tvAiring-image");
  let tvAiring_id2 = document.querySelectorAll(".tvAiring-title");
  let tvAiringRating = document.querySelectorAll("#tvAiringRating");
  renderTvAiring.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      let rating = Math.round(data.vote_average * 10) / 10;
      imageTvAiring[index].src = `${API_IMAGE}${data.poster_path}`;
      imageTvAiringTitle[index].innerText = `${data.name}`;
      tvAiring_id[index].id = data.id;
      tvAiring_id2[index].id = data.id;
      tvAiringRating[index].innerText = rating;
    });
  });
}

function getTvTop() {
  return fetch(API_TV_TOP)
    .then((response) => response.json())
    .then((data) => data.results);
}

function renderTvTop() {
  const renderTvTop = getTvTop();
  const imageTvTop = document.querySelectorAll(".movies-image__TvTop");
  const imageTvTopTitle = document.querySelectorAll(".movies-TvTop__title");
  let tvTopRated_id = document.querySelectorAll(".tvTopRated-image");
  let tvTopRated_id2 = document.querySelectorAll(".tvTopRated-title");
  let tvTopRating = document.querySelectorAll("#tvTopRating");
  renderTvTop.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      let rating = Math.round(data.vote_average * 10) / 10;
      imageTvTop[index].src = `${API_IMAGE}${data.poster_path}`;
      imageTvTopTitle[index].innerText = `${data.name}`;
      tvTopRated_id[index].id = data.id;
      tvTopRated_id2[index].id = data.id;
      tvTopRating[index].innerText = rating;
    });
  });
}

function getDetailsTrending(type) {
  if (type == "all") {
  } else if (type == "movie") {
  } else {
  }
  return API_DETAILS_MOVIE;
}

allCont.addEventListener("click", function (el) {
  let target = el.target;
  let pathname = el.view.window.location.href;
  let filename = pathname.split("/").pop();

  storeTranding.unshift({
    id: target.parentElement.id,
    media_type: target.parentElement.dataset.mediaType,
  });
  const dataParse = JSON.stringify(storeTranding);
  localStorage.setItem("dataTrending", dataParse);
  if (parseInt(target.parentElement.id) == storeTranding[0].id) {
    if (filename.length == 0 || filename == "index.html") {
      window.location = "./pages/detail.html";
    } else {
      window.location = "./detail.html";
    }
  } else {
    return;
  }
});

moviesCont.addEventListener("click", function (el) {
  let target = el.target;
  let pathname = el.view.window.location.href;
  let filename = pathname.split("/").pop();
  storeTranding.unshift({
    id: target.parentElement.id,
    media_type: target.parentElement.dataset.mediaType,
  });
  const dataParse = JSON.stringify(storeTranding);
  localStorage.setItem("dataTrending", dataParse);
  if (parseInt(target.parentElement.id) == storeTranding[0].id) {
    if (filename.length == 0 || filename == "index.html") {
      window.location = "./pages/detail.html";
    } else {
      window.location = "./detail.html";
    }
  } else {
    return;
  }
});

tvsCont.addEventListener("click", function (el) {
  let target = el.target;
  let pathname = el.view.window.location.pathname;
  let filename = pathname.split("/").pop();

  storeTranding.unshift({
    id: target.parentElement.id,
    media_type: target.parentElement.dataset.mediaType,
  });
  const dataParse = JSON.stringify(storeTranding);
  localStorage.setItem("dataTrending", dataParse);
  if (parseInt(target.parentElement.id) == storeTranding[0].id) {
    if (filename.length == 0 || filename == "index.html") {
      window.location = "./pages/detail.html";
    } else {
      window.location = "./pages/detail.html";
    }
  } else {
    return;
  }
});

getTrending();
renderMoviesNow();
renderMoviesPopular();
renderMoviesOnAir();
renderTvPopular();
renderTvAiring();
renderTvTop();
