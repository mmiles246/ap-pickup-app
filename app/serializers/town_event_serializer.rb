class TownEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors, :calendar_keys, :in_calendar
  has_one :organizer


  private

  def calendar_keys
    puts {self.object}
  end

  def in_calendar
    object.created_at.strftime("%Y-%m-%d ")
  end
end
