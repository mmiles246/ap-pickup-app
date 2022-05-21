class OrganizerCommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :organizer
  has_one :town_event
end
