$(function() {

  function displayMovie(movie, index, array) {

    var img = $('<img class="index-poster-img" />').attr('src', movie.poster_url);
    var img = img[0]

    var img_div = $('#movie').append('<div class="col-sm-2 poster-img" id="image">')

    debugger
    img_div = $('#image').append(img)
    img_div = img_div[0]

    debugger

    $('#movie').append('<div class="col-sm-10"><h2>' + movie.title + '<h3>Average Rating: ' + movie.avg_rating + '<h3>' + movie.release_date + '<h4>Dir. ' + movie.director + ' | ' + movie.runtime + ' minutes' + '</h4>' + '<p>' + movie.description)
  };

  var search = $("#search");

  search.on("ajax:success", function(e, data,status, xhr) {
    movies = data.movies
    $('#movies div').empty();
    movies.forEach(displayMovie);
  });

  search.on("ajax:error", function(e, data, status, xhr) {
    debugger
  });

});