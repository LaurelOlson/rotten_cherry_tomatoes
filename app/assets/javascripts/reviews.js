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

  // var new_review = $("#new_review");

  // new_review.on("ajax:success", function(e, data, status, xhr) {
  // // add to reviews
  // $("#reviews").prepend('<div><p>' + data.review.text + '<p>' + data.review.rating_out_of_ten + '/10' + '<p><small>- ' + data.user );
  // // clear form
  // $("#review_text").val('').focus();
  // $("#review_rating_out_of_ten").val('Rating');

  // });

  // new_review.on("ajax:error", function(e, data, status, xhr) {
  //   // add to errors
  //   var errors = data.responseText.replace('[', '').replace(']', '').replace(/"/g, '').split(',');
  //   errors.forEach(function(error) {
  //     $("#review-errors").append('<li>' + error );
  //   });
  // });

});