$(document).ready(function () {
  // Target all labels that contain the instruction text
  $("label.lbl").each(function () {
    // Increase font size and line height for readability
    $(this).css({
      "font-size": "14px",
      "line-height": "1.6",
      "color": "#000000",
      "font-family": "Arial, sans-serif"
    });
  });
});
