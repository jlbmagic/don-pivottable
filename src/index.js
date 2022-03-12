const jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");
import "pivottable";
import "pivottable/dist/c3_renderers.js";
import "pivottable/dist/export_renderers";

window.loadPivotTable = (data) => {
  const obj = JSON.parse(data);

  $.pivotUtilities.data = obj;
  $("#output").pivotUI(obj, {
    rows: ["City", "State"],
    cols: ["Branches"],
    vals: ["Amt All Del Loans"],
    aggregatorName: "Sum",
    rendererName: "Table",
    renderers: $.extend(
      $.pivotUtilities.renderers,
      $.pivotUtilities.c3_renderers,
      $.pivotUtilities.export_renderers,
      $.pivotUtilities.subtotal_renderers
    ),
  });
};
