$(function() {
  $('#addMovieNav').on('click', function() {
    $('#newMovieForm .form-group input').val('');
  });

  $('#newMovieForm').on('submit', function() {
    var title = $('#movie_title').val();
    var release_date = $('#movie_release_date').val();
    var director = $('#movie_director').val();
    var runtime = $('#movie_runtime_in_minutes').val();
    var description = $('#movie_description').val();

    var error_messages = [];

    if (title === '')
      error_messages.push('Title can\'t be blank');
    if (release_date === '')
      error_messages.push('Release date can\'t be blank');
    if (director === '')
      error_messages.push('Director can\'t be blank');
    if (runtime === '')
      error_messages.push('Runtime can\'t be blank');
    if (description === '')
      error_messages.push('Description can\'t be blank');

    if (error_messages.length > 0) {
      var error_header = $('<p>').text('Uh Oh!');
      var error_list = $('<ul>');
      error_messages.forEach(function(message) {
        var error = $('<li>').text(message);
        error_list.append(error);
      });
      error_header.append(error_list);
      $('#newMovieForm')
        .prepend(error_header);
      return false;
    }
  });
});