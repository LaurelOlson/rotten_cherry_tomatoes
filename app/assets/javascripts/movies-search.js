// $(function() {

//   function displayMovie(movie, index, array) {

//     $('#movie').append('<div class="col-sm-2 poster-img" id="image">');
//     var img = $('<img class="index-poster-img" />').attr('src', movie.poster_url)[0];
//     var img_div = $('#image').append(img)[0];

//     var title_link = $('<a data-remote="true" id="show-movie">').attr('href', movie.url).append(movie.title)[0];
//     var title = $('<h2>').append(title_link);

//     $('#movie').append('<div class="col-sm-10" id="title"><h3>Average Rating: ' + movie.avg_rating + '<h3>' + movie.release_date + '<h4>Dir. ' + movie.director + ' | ' + movie.runtime + ' minutes' + '</h4>' + '<p>' + movie.description);
//     $('#title').prepend(title);

//   };

//   var search = $("#search");

//   search.on("ajax:success", function(e, data, status, xhr) {
//     var movies = data.movies;
//     $('#movies div').empty();
//     movies.forEach(displayMovie);
//     $('#search-text').val('').focus();
//   });

//   search.on("ajax:error", function(e, data, status, xhr) {
//     $('#movies div').empty();
//     $('#movie').append('<div class="col-sm-4"><h4>' + data.responseText );
//     $('#search-text').val('').focus();
//   });

// });