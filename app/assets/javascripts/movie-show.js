$(function() {

  function displayMovie(movie) {

    var row = $('<div>').addClass('row movie-row');

    var imgDiv = $('<div>').addClass('col-sm-3');
    var img = $('<img>').addClass('show-poster-img').attr({src: movie.poster_url});  
    var infoDiv = $('<div>').addClass('col-sm-9');
    var edit_link = $('<a>').attr({ href: '#', 'data-id': movie.id }).text('edit | ');
    var delete_link =$('<a>').attr({ href: '#', 'data-id': movie.id }).text('delete');
    var edit_delete = $('<p>').append(edit_link).append(delete_link);
    var title = $('<h1>').text(movie.title);
    var review = $('<h3>').text('Average Review: ' + movie.avg_rating);
    var release_date = $('<h3>').text(movie.release_date);
    var dirRuntime = $('<h4>').text(movie.director + ' | ' + movie.runtime + ' min');
    var description = $('<p>').text(movie.description);

    $(imgDiv).append(img)

    $(infoDiv)
      .append(title)
      .append(edit_delete)
      .append(review)
      .append(release_date)
      .append(dirRuntime)
      .append(description);

    $('#results').append(row)
      .append(imgDiv)
      .append(infoDiv);
  }

  function displayReviews(review, index, array) {
    
  };

  $('#results').on('click', '.movie', function(event) {
    event.preventDefault();
    $('#results').empty();
    var url = '/movies/' + $(this).data('id');
    // var reviews = $(this).data('reviews');
    $.getJSON(url, function(data) {
      debugger
      displayMovie(data.movie);
      // displayReviews(data.reviews);
    })
  });

});
