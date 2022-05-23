class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :about, :admin, :is_organizer

  def is_organizer
    true
  end
end
