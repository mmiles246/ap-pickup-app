class TownEvent < ApplicationRecord
  has_many_attached :event_imgs

  belongs_to :organizer

  has_many :signups, dependent: :destroy
  has_many :users, through: :signups, dependent: :destroy

  has_many :user_comments, dependent: :destroy
  has_many :user_event_comments, through: :user_comments, source: :user, dependent: :destroy

  has_many :organizer_comments
  has_many :organizer_event_comments, through: :organizer_comments, source: :organizer


  def signups_user_ids
    user_ids=Array.new
    users.each do |user|
      user_ids.push(user.id)
    end
    user_ids
  end

end
