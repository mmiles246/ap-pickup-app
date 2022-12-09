class Organizer < ApplicationRecord
    include ActiveModel::Serializers::JSON
    has_secure_password
    has_one_attached :avatar
    
    has_many :town_events

    has_many :organizer_comments
    has_many :event_comments, through: :organizer_comments, source: :town_event

    validates :email, uniqueness: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :email, :first_name, :last_name, :about, presence: true

    def is_organizer
        true
      end

      def avatar_url
        Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
      end

end

