class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def deleted_email(user)
    @user = user
    mail(to: @user.email, subjet: 'Account Deleted')
  end
end
