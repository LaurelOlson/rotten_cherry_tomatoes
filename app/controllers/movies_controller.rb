class MoviesController < ApplicationController

  def index
    title = params[:title]
    director = params[:director]
    runtime = params[:runtime]
    if title || director || runtime
      @movies = []
      @movies << Movie.where("title like ?", "%#{title}%") unless title == ""
      @movies << Movie.where("director like ?", "%#{director}%") unless director == ""
      if runtime == "Under 90 min"
        @movies << Movie.where("runtime_in_minutes < ?", 90)
      elsif runtime == "Over 120 min"
        @movies << Movie.where("runtime_in_minutes > ?", 120)
      elsif runtime = "90-120 min"
        @movies << Movie.where("runtime_in_minutes > ? AND runtime_in_minutes < ?", 90, 120)
      end
      @movies.flatten!
    else
      @movies = Movie.all
    end
  end

  def show
    @movie = Movie.find(params[:id])
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
