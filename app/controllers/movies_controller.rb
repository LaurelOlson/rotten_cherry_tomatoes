class MoviesController < ApplicationController

  def index

    @movie = Movie.new

    title = params[:title] unless params[:title] == ""
    director = params[:director] unless params[:director] == ""
    runtime = params[:runtime] unless params[:runtime] == ""

    if title || director || runtime # Search
      @movies = []
      @movies << Movie.search_title(title) if title
      @movies << Movie.search_director(director) if director
      @movies << Movie.search_runtime(runtime) if runtime
      @movies.flatten!

    else # Show all
      @movies = Movie.all.order(created_at: :desc)

    end

  end

  def show
    # include reviews and review user in movie
    @movie = Movie.includes(reviews: :user).find(params[:id])
    @reviews = @movie.reviews.order(created_at: :desc).page(params[:page]).per(10)
    if current_user
      @review = @movie.reviews.build
      @review.user_id = current_user.id
    end
  end

  def new
    @movie = Movie.new
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def create
    @movie = Movie.new(movie_params)

    # respond_to do |format|
    #   if @movie.save
    #     format.js
    #   end
    # end

    # if @movie.save
    #   render json: { movie: @movie, poster_url: @movie.poster_image.url, avg_review: @movie.review_average, movie_url: movie_path(@movie), release_date: @movie.format_release_date }, status: 200
    # else
    #   render json: @movie.errors.full_messages, status: :unprocessable_entity
    # end

    if @movie.save
      redirect_to movies_path, notice: "#{@movie.title} was submitted successfully!"
    else
      render :new
    end
  end

  def update
    @movie = Movie.find(params[:id])

    if @movie.update_attributes(movie_params)
      redirect_to movie_path(@movie)
    else
      render :edit
    end
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
    redirect_to movies_path
  end

  protected

  def movie_params
    params.require(:movie).permit(:title, :release_date, :director, :runtime_in_minutes, :poster_image, :description)
  end

end