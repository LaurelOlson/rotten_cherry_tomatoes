$(function() {

  function displayMovie(movie) {
  debugger
  $('#movies').prepend('<div class="col-md-12" id="movie-show">')
  $('#movie-show').prepend('<div class="col-md-3 show-poster-img" id="image">');
  var img = $('<img class="show-poster-img" />').attr('src', movie.poster_url)[0];
  var img_div = $('#image').append(img)[0];

  $('#movie-show').append('<div class="col-sm-9" id="title"><h3>' + '<h2>' + movie.title + '<h3>' + 'Average Rating: ' + movie.avg_rating + '<h3>' + movie.release_date + '<h4>Dir. ' + movie.director + ' | ' + movie.runtime + ' minutes' + '</h4>' + '<p>' + movie.description);
  };

  function displayReviews(review, index, array) {

  };

  var show = $('#show-movie');

  show.on('ajax:success', function(e, data, status, xhr) {
    debugger
    var reviews = data.reviews;
    $('#movies div').remove();
    displayMovie(data.movie);
  });

  show.on('ajax:error', function(e, data, status, xhr) {
    debugger
  });

});
