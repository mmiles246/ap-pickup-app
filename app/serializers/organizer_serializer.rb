class OrganizerSerializer
  include JSONAPI::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :about, :admin, :is_organizer, :avatar, :avatar_url

  has_many :town_events

  def is_organizer
    true
  end
end
