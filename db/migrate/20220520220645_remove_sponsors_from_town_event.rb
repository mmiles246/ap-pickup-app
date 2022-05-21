class RemoveSponsorsFromTownEvent < ActiveRecord::Migration[7.0]
  def change
    remove_column :town_events, :sponsors, :string
  end
end
