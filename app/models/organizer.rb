class Organizer < ApplicationRecord
    has_secure_password
    has_one_attached :profile_img
    
    has_many :town_events

    has_many :organizer_comments
    has_many :event_comments, through: :organizer_comments, source: :town_event

    validates :email, uniquness: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :email, :first_name, :last_name, :about, presence: true

end

