class ReviewsController < ApplicationController

  before_filter :load_movie
  before_filter :restrict_access_login

  # respond_to :json

  def new
    @review = @movie.reviews.build # .build assigns movie_id to @review
  end

  def create
    @review = @movie.reviews.build(review_params)
    @review.user_id = current_user.id
    @review.save

    results = { success: false }
    
    if @review.save
      results[:success] = true
      respond_to do |format|
        format.json { render json: results }
        format.html
      end
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end

  end

  protected

  def load_movie
    @movie = Movie.find(params[:movie_id])
  end

  def review_params
    params.require(:review).permit(:text, :rating_out_of_ten)
  end

end
