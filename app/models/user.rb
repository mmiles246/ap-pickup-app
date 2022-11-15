class User < ApplicationRecord
    has_secure_password
    # has_one_attached :profile_img
    
    has_many :signups, dependent: :destroy
    has_many :town_events, through: :signups, dependent: :destroy

    has_many :user_comments, dependent: :destroy
    has_many :event_comments, through: :user_comments, source: :town_event, dependent: :destroy
    

    validates :email, uniqueness: true, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    # validates :email, :first_name, :last_name, :newsletter, :interested_in, presence: true
end
