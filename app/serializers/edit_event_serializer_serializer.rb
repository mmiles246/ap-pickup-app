class EditEventSerializerSerializer < ActiveModel::Serializer
  attributes :id, :name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors
end
