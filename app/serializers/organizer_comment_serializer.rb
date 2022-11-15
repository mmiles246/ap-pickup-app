class OrganizerCommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :organizer_id, :town_event_id, :organizer
  
  has_one :organizer
  has_one :town_event
end
