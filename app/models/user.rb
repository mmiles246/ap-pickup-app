class User < ApplicationRecord
    has_secure_password
    # has_one_attached :profile_img
    
    has_many :signups
    has_many :town_events, through: :signups

    has_many :user_comments
    has_many :event_comments, through: :user_comments, source: :town_event
    

    validates :email, uniqueness: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    # validates :email, :first_name, :last_name, :newsletter, :interested_in, presence: true
end
