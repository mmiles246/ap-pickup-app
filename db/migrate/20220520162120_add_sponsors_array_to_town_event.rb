class AddSponsorsArrayToTownEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :town_events, :sponsors_array, :string, array: true, default: []
  end
end
