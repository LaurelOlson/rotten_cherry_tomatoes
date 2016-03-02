class Admin::UsersController < ApplicationController

  before_filter :restrict_access_admin

  def index
    @users = User.order(:firstname).page(params[:page]).per(10)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to admin_users_path, notice: "New user #{@user.full_name} successfully created"
    else
      render :new
    end

  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      redirect_to admin_users_path, notice: "User successfully updated"
    else
      render :edit
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    user = @user
    @user.destroy
    UserMailer.deleted_email(user).deliver
    redirect_to admin_users_path, notice: "user deleted"
  end

  protected

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :admin)
  end

end
