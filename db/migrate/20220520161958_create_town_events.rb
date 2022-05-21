class CreateTownEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :town_events do |t|
      t.string :name
      t.string :type_of
      t.datetime :start_time
      t.datetime :end_time
      t.string :location
      t.string :event_description
      t.string :sponsors
      t.belongs_to :organizer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
