API_IMAGE = "https://image.tmdb.org/t/p/w500";
API_KEY = "0407909af3830d4ca4556ca68266735f";
API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`;
API_MOVIES_NOW = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
API_MOVIES_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
API_MOVIES_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
API_TV_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
API_TV_AIRING = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
API_TV_TOP = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

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
