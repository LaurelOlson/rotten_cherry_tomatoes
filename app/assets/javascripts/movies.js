// $(function() {


//   // $.ajax({
//   //   method: 'POST',
//   //   url: '/movies',
//   //   data: {
//   //     runtime_in_minutes:
//   //   }
//   // })

//   var new_movie = $("#new_movie");

//     new_movie.on("ajax:success", function(e, data, status, xhr) {
//       // add to movies index
//       // debugger
//       console.log('success!', data);
//       var poster_url = data.poster_url
//       var avg_review = data.avg_review
//       var movie_url = data.movie_url
//       var release_date = data.release_date
//       var title = data.movie.title
//       var director = data.movie.director
//       var runtime = data.movie.runtime_in_minutes
//       var description = data.movie.description

//       $("#movie")
//         .prepend('<div class="col-sm-2 poster-img">' + '<img>', {class: 'index-poster-img', src: poster_url} )
//         .append('<div class="col-sm-10"><h2>' + '<a>', { href: movie_url } + title + '<h3>Average Rating: ' + avg_review + '<h3>' + release_date + '<h4>Dir. ' + director + ' | ' + runtime + ' minutes' + '<p>' + description );
//     });

//     new_movie.on("ajax:error", function(e, data, status, xhr) {
//       console.error('error!', e);
//       // debugger
//     })

// });