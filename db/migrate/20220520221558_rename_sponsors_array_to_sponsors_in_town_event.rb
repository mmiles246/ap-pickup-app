class RenameSponsorsArrayToSponsorsInTownEvent < ActiveRecord::Migration[7.0]
  def up
    rename_column :town_events, :sponsors_array, :sponsors
  end

  def down
    rename_column :town_events, :sponsors, :sponsors_array
  end
end
