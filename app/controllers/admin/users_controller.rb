class Admin::UsersController < ApplicationController

  before_filter :restrict_access_admin

  def index
    @users = User.all
  end

  # def new
  #   @admin = User.new
  # end

  # def create
  #   @admin = User.create(user_params)

  #   if @admin.save
  #     session[:user_id] = @admin.id
  #     redirect_to admin_users_path, notice "New admin #{@admin.full_name} successfully created"
  #   else
  #     render :admin_new
  #   end

  # end

  # protected

  # def user_params
  #   params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation)
  # end

end
