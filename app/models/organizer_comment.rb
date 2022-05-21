class OrganizerComment < ApplicationRecord
  belongs_to :organizer
  belongs_to :town_event
end
