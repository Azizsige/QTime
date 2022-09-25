import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel/dist/owl.carousel.min.js";
import "owl.carousel";
import $ from "jquery";

$(".owl-carousel").owlCarousel({
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
