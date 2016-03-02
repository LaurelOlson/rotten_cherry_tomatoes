class UserMailer < ActionMailer::Base
  default from: "laurel.olson@outlook.com"

  def deleted_email(user)
    @user = user
    mail(to: @user.email, subjet: 'Account Deleted')
  end
end
