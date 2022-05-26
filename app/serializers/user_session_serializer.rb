class UserSessionSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :about, :interested_in, :newsletter, :is_user

  def is_user
    true
  end

  def likes_this_type_event
    object.interested_in
  end
end
