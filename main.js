$("body").on("click", ".my-button", function (e) {
  e.preventDefault();

  const this_button = e.target;

  const url = $(this_button).data("image");

  console.log(url);

  $("img").attr("src", url);
});