$("body").on("click", "#man", function (e) {
  e.preventDefault();

  const url = $("#man").data("image");

  console.log(url);

  $("img").attr("src", url);
});

$("body").on("click", "#baby", function (e) {
  e.preventDefault();

  const url = $("#baby").data("image");

  console.log(url);

  $("img").attr("src", url);
});