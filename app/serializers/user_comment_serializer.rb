class UserCommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :town_event
end
