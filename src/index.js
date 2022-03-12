const jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");
import "pivottable";
// import "pivottable/dist/c3_renderers.js";
// import "pivottable/dist/export_renderers";
import { data } from "./data";

console.log(data);

$("#output").pivotUI(data, {
  rows: ["City", "State"],
  cols: ["Branches"],
  vals: ["Amt All Del Loans"],
  aggregatorName: "Sum",
  rendererName: "Table",
});
