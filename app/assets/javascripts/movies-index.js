$(function() {

  function displayMovie(movie) {

    var row = $('<div>').addClass('row movie-row');

    var imgDiv = $('<div>').addClass('col-sm-2 poster-img');
    var img = $('<img>').addClass('index-poster-img').attr({src: movie.poster_url});  
    var infoDiv = $('<div>').addClass('col-sm-10');
    var title_link = $('<a>').addClass('movie').attr({ href: '#', 'data-id': movie.id }).text(movie.title);
    var title = $('<h2>').append(title_link);
    var review = $('<h3>').text('Average Review: ' + movie.avg_rating);
    var release_date = $('<h3>').text(movie.release_date);
    var dirRuntime = $('<h4>').text(movie.director + ' | ' + movie.runtime + ' min');
    var description = $('<p>').text(movie.description);

    $(imgDiv).append(img)

    $(infoDiv)
      .append(title)
      .append(review)
      .append(release_date)
      .append(dirRuntime)
      .append(description);

    $('#results').append(row)
      .append(imgDiv)
      .append(infoDiv);
  }

  $('#movies').on('click', function(event) {
    event.preventDefault();
    $('#results').empty();
    $.getJSON('/movies', function(movies) {
      $.each(movies, function(i, movies) {
        $.each(movies, function(i, movie) {
          displayMovie(movie);
        })
      });
    });
    $('#search-text').focus();
  })

  $('#search').on('click', function(event) {
    event.preventDefault();
    $('#results').empty();
    $.getJSON('/movies', { text: $('#search-text').val(), runtime: $('#search-runtime').val() }, function(movies) {
      $.each(movies, function(i, movies) {
        $.each(movies, function(i, movie) {
          displayMovie(movie);
        })
      });
    });
    debugger
    $('#search-text').val('').focus();
    $('#runtime').val('Runtime');
  })

})