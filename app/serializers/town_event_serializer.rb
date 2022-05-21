class TownEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors
  has_one :organizer
end
