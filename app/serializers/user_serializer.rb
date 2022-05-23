class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :about, :interested_in, :newsletter, :is_user

  def is_user
    true
  end
end
