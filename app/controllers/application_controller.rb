class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  protected

  def restrict_access_login
    if !current_user
      flash[:alert] = 'You must log in'
      redirect_to new_session_path
    end
  end

  def restrict_access_admin
    if !current_user || current_user.admin != 1
      flash[:alert] = 'Admin access only'
      if current_user
        redirect_to movies_path
      else 
        redirect_to new_session_path
      end
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

end
