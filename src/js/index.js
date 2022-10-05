import "./../css/style.css";
import "flowbite";

import "./app.js";
import "./pagination.min";

import { library, icon } from "@fortawesome/fontawesome-svg-core";
// import "https://kit.fontawesome.com/3c72b6bd6b.js";

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context("./../img/", true, /\.(png|jpe?g|svg)$/));
