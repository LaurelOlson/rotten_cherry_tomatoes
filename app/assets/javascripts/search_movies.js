$(function() {

  function displayMovie(movie, index, array) {

    var img = $('<img class="index-poster-img" />').attr('src', movie.poster_url);
    var img = img[0];
    var title_link = $('<a>').attr('href', movie.url)
    var title = title_link.append('<h2>' + movie.title);
    var title = title[0];
    debugger

    var img_div = $('#movie').append('<div class="col-sm-2 poster-img" id="image">');

    img_div = $('#image').append(img);
    img_div = img_div[0];

    $('#movie').append('<div class="col-sm-10" id="title"><h3>Average Rating: ' + movie.avg_rating + '<h3>' + movie.release_date + '<h4>Dir. ' + movie.director + ' | ' + movie.runtime + ' minutes' + '</h4>' + '<p>' + movie.description);
    $('#title').prepend(title);

  };

  var search = $("#search");

  search.on("ajax:success", function(e, data, status, xhr) {
    movies = data.movies
    $('#movies div').empty();
    movies.forEach(displayMovie);
    $('#search-text').val('').focus();
  });

  search.on("ajax:error", function(e, data, status, xhr) {
    $('#movies div').empty();
    $('#movie').append('<div class="col-sm-4"><h4>' + data.responseText );
    $('#search-text').val('').focus();
  });

});