import "./../css/style.css";
import "flowbite";

import "./app.js";
import "./pagination.min";

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context("./../img/", true, /\.(png|jpe?g|svg)$/));
