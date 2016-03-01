class Movie < ActiveRecord::Base

  has_many :reviews

  validates :title,
    presence: true

  validates :director,
    presence: true

  validates :runtime_in_minutes,
    numericality: { only_integer: true }

  validates :description,
    presence: true

  validates :release_date,
    presence: true

  validate :release_date_is_in_the_past

  validate :poster_image_size

  mount_uploader :poster_image, MoviePosterUploader

  def review_average
    reviews.sum(:rating_out_of_ten)/reviews.size unless reviews.size == 0
  end

  protected

  def release_date_is_in_the_past
    if release_date.present?
      errors.add(:release_date, 'should be in the past') if release_date > Date.today
    end
  end

  def poster_image_size
    errors[:poster_image] << "should be less than 500kb" if poster_image.size > 0.5.megabytes
  end

end
