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

    $('#reviews').prepend(reviewDiv);
  };

  $('#review-text').keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      var postData = { 
        review: {
          text: $('#review-text').val(),
          rating_out_of_ten: $("input[type='radio'][name='rating_out_of_ten']:checked").val() * 2, 
          author: $(this).data('user'),
          movie_id: $(this).data('movie')
        }
      };

      var url = '/movies/' $(this).data('movie') +'/reviews';
      $.post(url, postData, function(result) {
        displayReview(postData.review);
      }, 'json');
    }
  })

  $(':radio').change(
    function(){
      $('.choice').text( this.value + ' stars' );
    } 
  )

});