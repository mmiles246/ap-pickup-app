class TownEvent < ApplicationRecord
  has_many_attached :event_imgs

  belongs_to :organizer

  has_many :signups
  has_many :users, through: :signups

  has_many :user_comments
  has_many :user_event_comments, through: :user_comments, source: :user

  has_many :organizer_comments
  has_many :organizer_event_comments, through: :organizer_comments, source: :organizer
end
