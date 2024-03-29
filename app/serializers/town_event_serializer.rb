class TownEventSerializer 
  include JSONAPI::Serializer
  attributes :id, :name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors, :signups, :user_comments, :organizer_comments, :signups_user_ids, :organizer_id
  has_one :organizer, serializer: OrganizerSerializer
  has_many :signups
  has_many :user_comments


  private

  # def calendar_keys
  #   puts {self.object}
  # end

  # def in_calendar
  #   object.created_at.strftime("%Y-%m-%d ")
  # end
end
