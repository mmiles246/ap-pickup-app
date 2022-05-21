class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :about, :admin
end
