$(document).ready(function () {
  console.log("Ready!");
});

$("article img").addClass("image-center");

$("article").children().last().remove();

$("h1").css("font-size", 78);

$("aside ol").append("<li>Hello</li>");

$("article img").click(function () {
  $("img").remove();
});

$(".form-control").on("keyup blur change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + red + "," + green + "," + blue + ")"
  );
});
