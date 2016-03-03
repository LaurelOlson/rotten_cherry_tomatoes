$(function() {

  var new_review = $("#new_review");

  new_review.on("ajax:success", function(e, data, status, xhr) {
  // add to reviews
  $("#reviews").prepend('<div><p>' + data.review.text + '<p>' + data.review.rating_out_of_ten + '/10' + '<p><small>- ' + data.user );
  // clear form
  $("#review_text").val('').focus();
  $("#review_rating_out_of_ten").val('Rating');

  });

  new_review.on("ajax:error", function(e, data, status, xhr) {
    // add to errors
    var errors = data.responseText.replace('[', '').replace(']', '').replace(/"/g, '').split(',');
    errors.forEach(function(error) {
      $("#review-errors").append('<li>' + error );
    });
  });

});