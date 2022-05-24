class TownEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors, :signups
  has_one :organizer
  has_many :signups


  private

  # def calendar_keys
  #   puts {self.object}
  # end

  # def in_calendar
  #   object.created_at.strftime("%Y-%m-%d ")
  # end
end
