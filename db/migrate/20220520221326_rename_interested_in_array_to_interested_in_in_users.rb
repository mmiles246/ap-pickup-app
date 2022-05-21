class RenameInterestedInArrayToInterestedInInUsers < ActiveRecord::Migration[7.0]
  def up
    rename_column :users, :interested_in_array, :interested_in
  end

  def down
    rename_column :users, :interested_in, :interested_in_array
  end
end
