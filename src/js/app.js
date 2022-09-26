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
});

const tabsBtn = document.querySelectorAll(".tabs-btn");

tabsBtn.forEach((element) => {
  element.addEventListener("click", function () {
    tabsBtn.forEach((tab) =>
      tab.classList.remove("bg-[#7B6EF6]", "text-[#8E95A9]")
    );

    // alert("Yeyy");
    this.classList.add("bg-[#7B6EF6]", "text-white");
    this.classList.remove("text-[#8E95A9]");
  });
});

async function getTrending() {
  const url = await fetch(API_TRENDING);
  const datas = await url.json();
  renderTrending(datas.results);
}

async function renderTrending(data) {
  const trending = document.getElementById("trending");
  console.log(data);
  data.length = 8;
  const random = Math.random() * (data.length - 1) + 1;
  await data.forEach((datas) => {
    if (datas.original_title == undefined) {
      // console.log(datas.original_name);
      trending.innerHTML += `
      <div
      class="movie w-[9rem] h-[10rem] sm:w-[8rem] sm:h-full lg:w-[13rem] xl:w-[9rem] xl:h-full 2xl:w-[19rem] mt-16 xl:mt-12 2xl:mt-20"
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
          class="movies-title text-movieTitle p-3 text-[12px] xl:text-[16px]"
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
      class="movie w-[9rem] h-[10rem] sm:w-[8rem] sm:h-full lg:w-[13rem] xl:w-[9rem] xl:h-full 2xl:w-[19rem] mt-16 xl:mt-12 2xl:mt-20"
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
          class="movies-title text-movieTitle p-3 text-[12px] xl:text-[16px]"
        >
          <h6>${datas.original_title}</h6>
        </div>
      </div>
    </div>
      `;
    }
  });
}

getTrending();
