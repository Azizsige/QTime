const API_IMAGE = "https://image.tmdb.org/t/p/w500";
const API_KEY = "0407909af3830d4ca4556ca68266735f";
const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
const API_MOVIES_NOW = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
const API_MOVIES_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const API_MOVIES_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const API_TV_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
const API_TV_AIRING = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
const API_TV_TOP = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel/dist/owl.carousel.min.js";
import "owl.carousel";
import $ from "jquery";

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
  const url = await fetch(API_TRENDING);
  const datas = await url.json();
  renderTrending(datas.results);
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
  // console.log(data);
  const random = Math.floor(Math.random() * (data.length - 1) + 1);
  console.log(random);
  await data.slice(random, random + 8).forEach((datas) => {
    if (datas.original_title == undefined) {
      // console.log(datas.original_name);
      trending.innerHTML += `
      <div
      class="movie w-[9rem] shadow-2xl h-full sm:w-[8rem] sm:h-full lg:w-[13rem] xl:w-[9rem] xl:h-full 2xl:w-[19rem] mt-8 sm:mt-12 xl:mt-12 2xl:mt-20"
    >
      <div class="movies bg-cardMovies rounded-xl">
        <div class="movies-image p-2">
          <img
            src="${API_IMAGE}${datas.poster_path}"
            alt=""
            class="rounded-xl"
          />
        </div>
        <div
          class="movies-title text-movieTitle p-3 xl:p-[1.75rem] text-[12px] xl:text-[20px]"
        >
          <h6>${datas.original_name}</h6>
        </div>
      </div>
    </div>
      `;
    } else if (datas.original_name == undefined) {
      // console.log(datas.original_title);
      trending.innerHTML += `
      <div
      class="movie w-[9rem] shadow-2xl h-full sm:w-[8rem] sm:h-full lg:w-[13rem] xl:w-[9rem] xl:h-full 2xl:w-[19rem] mt-8 sm:mt-12 xl:mt-12 2xl:mt-20"
    >
      <div class="movies bg-cardMovies rounded-xl">
        <div class="movies-image p-2">
        <img
        src="${API_IMAGE}${datas.poster_path}"
        alt=""
        class="rounded-xl"
      />
        </div>
        <div
          class="movies-title text-movieTitle p-3 xl:p-[1.75rem] text-[12px] xl:text-[20px]"
        >
          <h6>${datas.original_title}</h6>
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
  renderMoviesNow.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      imageNow[index].src = `${API_IMAGE}${data.poster_path}`;
      imageNowTitle[index].innerText = `${data.original_title}`;
    });
  });
}

function renderMoviesPopular() {
  const renderMoviesPopular = getMoviesPopular();
  const imagePopular = document.querySelectorAll(".movies-image__popular");
  const imagePopularTitle = document.querySelectorAll(".movies-popular__title");
  renderMoviesPopular.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      imagePopular[index].src = `${API_IMAGE}${data.poster_path}`;
      imagePopularTitle[index].innerText = `${data.original_title}`;
      // console.log(data);
    });
  });
}
function renderMoviesOnAir() {
  const renderMoviesOnAir = getMoviesOnAir();
  const imageOnAir = document.querySelectorAll(".movies-image__OnAir");
  const imageOnAirTitle = document.querySelectorAll(".movies-OnAir__title");
  renderMoviesOnAir.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      imageOnAir[index].src = `${API_IMAGE}${data.poster_path}`;
      imageOnAirTitle[index].innerText = `${data.original_title}`;
      // console.log(data);
    });
  });
}

// TV

function getTvPopular() {
  return fetch(API_TV_POPULAR)
    .then((response) => response.json())
    .then((data) => data.results);
}

function renderTvPopular() {
  const renderTvPopular = getTvPopular();
  const imageTvPop = document.querySelectorAll(".movies-image__TvPop");
  const imageTvPopTitle = document.querySelectorAll(".movies-TvPop__title");
  renderTvPopular.then(function (datas) {
    console.log(datas);
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      imageTvPop[index].src = `${API_IMAGE}${data.poster_path}`;
      imageTvPopTitle[index].innerText = `${data.original_name}`;
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
  renderTvAiring.then(function (datas) {
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      imageTvAiring[index].src = `${API_IMAGE}${data.poster_path}`;
      imageTvAiringTitle[index].innerText = `${data.original_name}`;
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
  renderTvTop.then(function (datas) {
    console.log(datas);
    const random = Math.floor(Math.random() * (datas.length - 1) + 1);
    datas.slice(random, random + 4).forEach((data, index) => {
      imageTvTop[index].src = `${API_IMAGE}${data.poster_path}`;
      imageTvTopTitle[index].innerText = `${data.original_name}`;
    });
  });
}

// TV

getTrending();
renderMoviesNow();
renderMoviesPopular();
renderMoviesOnAir();
renderTvPopular();
renderTvAiring();
renderTvTop();
