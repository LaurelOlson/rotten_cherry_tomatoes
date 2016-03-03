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
    
    if @review.save
      render json: {review: @review, user: current_user.firstname.capitalize}, status: 200
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end

    # respond_to do |format|
    #   if @review.save
    #     # format.html { redirect_to @movie, notice: 'Review Added!' }
    #     format.json { render json: 
    #   else
    #     # format.html { render :new }
    #     format.json { render json: @review.errors, status: :unprocessable_entity }
    #   end
    # end

  end

  protected

  def load_movie
    @movie = Movie.find(params[:movie_id])
  end

  def review_params
    params.require(:review).permit(:text, :rating_out_of_ten)
  end

end
