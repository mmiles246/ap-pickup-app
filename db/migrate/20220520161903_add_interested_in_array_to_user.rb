class AddInterestedInArrayToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :interested_in_array, :string, array: true, default: []
  end
end
