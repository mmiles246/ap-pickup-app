class UserCommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :town_event_id, :user
  has_one :user
  # has_one :town_event
end
