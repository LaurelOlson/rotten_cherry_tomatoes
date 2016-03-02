class MoviesController < ApplicationController

  def index

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
      @movies = Movie.all

    end

  end

  def show
    # include reviews and review user in movie
    @movie = Movie.includes(reviews: :user).find(params[:id])
  end

  def new
    @movie = Movie.new
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def create
    @movie = Movie.new(movie_params)

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
