$(function() {

  function displayReview(review) {
    var success_msg = $('<p>').addClass('alert-success').text('Review Added!');
    var text = $('<p>').text(review.text);
    var rating = $('<p>').text(review.rating_out_of_ten + '/10');
    var reviewer = $('<small>').text(review.author);
    var reviewDiv = $('<div>').addClass('col-sm-12');

    $(reviewDiv)
      .append(success_msg)
      .append(text)
      .append(rating)
      .append(reviewer);

    $('#show-reviews').prepend(reviewDiv);
  };

  $('#review-text').keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      var postData = { 
        review: {
          text: $('#text').val(),
          rating_out_of_ten: $('#rating_out_of_ten').val(), 
          author: $(this).data('user')
        }
      };

      var url = '/movies/' + $(this).data('id') + '/reviews';
      $.post(url, postData, function(result) {
        review = postData.review
        displayReview(review);
      }, 'json');
    }
  })

  $('#add-review').on('click', function(event) {
    event.preventDefault();
    var postData = { 
      review: {
        text: $('#text').val(),
        rating_out_of_ten: $('#rating_out_of_ten').val(), 
        author: $(this).data('user')
      }
    };

    var url = '/movies/' + $(this).data('id') + '/reviews';
    $.post(url, postData, function(result) {
      review = postData.review
      debugger
      displayReview(review);
    }, 'json');
  });

});