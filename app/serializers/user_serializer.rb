class UserSerializer 
include JSONAPI::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :about, :interested_in, :newsletter, :is_user, :signups, :avatar, :avatar_url

  has_many :signups

  def is_user
    true
  end
end
