$(function() {

  function displayMovie(movie) {

    var row = $('<div>').addClass('row movie-row');

    var imgDiv = $('<div>').addClass('col-sm-3');
    var img = $('<img>').addClass('show-poster-img').attr({src: movie.poster_url}).appendTo(imgDiv);  

    var infoDiv = $('<div>').addClass('col-sm-9');

    var edit_link = $('<a>').attr({ href: '#', 'data-id': movie.id, id: 'edit' }).text('edit');
    var delete_link = $('<a>').attr({ href: '#', 'data-id': movie.id, id: 'delete' }).text('delete');

    var title = $('<h1>').text(movie.title).appendTo(infoDiv);
    var edit_delete = $('<p>').append(edit_link).append(' | ').append(delete_link).appendTo(infoDiv);
    var review = $('<h3>').text('Average Review: ' + movie.avg_rating).appendTo(infoDiv);
    var release_date = $('<h3>').text(movie.release_date).appendTo(infoDiv);
    var dirRuntime = $('<h4>').text(movie.director + ' | ' + movie.runtime + ' min').appendTo(infoDiv);
    var description = $('<p>').text(movie.description).appendTo(infoDiv);

    row.append(imgDiv).append(infoDiv).appendTo('#results');
  }

  function displayReview(review) {
    var text = $('<p>').text(review.text);
    var rating = $('<p>').text(review.rating + '/10');
    var reviewer = $('<small>').text(review.author);
    var reviewDiv = $('<div>').addClass('col-sm-12')

    $(reviewDiv)
      .append(text)
      .append(rating)
      .append(reviewer);

    $('#show-reviews').append(reviewDiv);

  };

  $('#results').on('click', '.movie', function(event) {
    event.preventDefault();
    $('#results').empty();
    var url = '/movies/' + $(this).data('id');
    $.getJSON(url, function(data) {
      displayMovie(data.movie);
      $('#reviews').addClass('show');
      $('#add-review').attr({'data-id': data.movie.id, 'data-user': data.movie.current_user });
      $.each(data.reviews, function(i, review) {
        displayReview(review);
      });
    });
  });

});
