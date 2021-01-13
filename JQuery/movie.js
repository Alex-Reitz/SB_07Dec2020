let movies = [];
$("#target").submit(function (e) {
  e.preventDefault();
  let $movieRateInput = $("#movieRating").val();
  let $movieTitleInput = $("#movieTitle").val();
  movies.push($movieTitleInput);
  movies.push($movieRateInput);
  $("#container").append(movies.join(""));
});
