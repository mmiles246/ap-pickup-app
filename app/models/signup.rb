class Signup < ApplicationRecord
  belongs_to :user
  belongs_to :town_event
end
