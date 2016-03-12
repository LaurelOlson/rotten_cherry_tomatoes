// $(function() {

//   function displayMovie(movie) {

//     var row = $('<div>').addClass('row movie-row');

//     var imgDiv = $('<div>').addClass('col-sm-3');
//     var img = $('<img>').addClass('show-poster-img').attr({src: movie.poster_url}).appendTo(imgDiv);  

//     var infoDiv = $('<div>').addClass('col-sm-9');
//     var edit_link = $('<a>').attr({ href: `/movies/${movie.id}/edit`, 'data-id': movie.id, 'data-target': "#myModal", 'data-toggle': "modal", id: 'edit' }).text('edit');
//     var delete_link = $('<a>').attr({ href: '/movies/${movie.id}/delete', 'data-id': movie.id, id: 'delete', 'data-confirm': 'Delete?' }).text('delete');
//     var title = $('<h1>').text(movie.title);
//     var edit_delete = $('<p>').append(edit_link).append(' | ').append(delete_link);
//     var review = $('<h3>').text('Average Review: ' + movie.avg_rating);
//     var release_date = $('<h3>').text(movie.release_date);
//     var dirRuntime = $('<h4>').text(movie.director + ' | ' + movie.runtime + ' min');
//     var description = $('<p>').text(movie.description);

//     infoDiv
//       .append(title)
//       .append(edit_delete)
//       .append(review)
//       .append(release_date)
//       .append(dirRuntime)
//       .append(description);

//     row.append(imgDiv).append(infoDiv).appendTo('#results');
//   }

//   function displayReview(review) {
//     var text = $('<p>').text(review.text);
//     var rating = $('<p>').text(review.rating + '/10');
//     var reviewer = $('<small>').text(review.author);
//     var reviewDiv = $('<div>').addClass('col-sm-12')

//     $(reviewDiv)
//       .append(text)
//       .append(rating)
//       .append(reviewer);

//     $('#show-reviews').append(reviewDiv);

//   };

//   $('#results').on('click', '.movie', function(event) {
//     event.preventDefault();
//     $('#results').empty();
//     var url = '/movies/' + $(this).data('id');
//     $.getJSON(url, function(data) {
//       displayMovie(data.movie);
//       $('#reviews').addClass('show');
//       $('#add-review').attr({'data-id': data.movie.id, 'data-user': data.movie.current_user });
//       $.each(data.reviews, function(i, review) {
//         displayReview(review);
//       });
//     });
//   });

// });
