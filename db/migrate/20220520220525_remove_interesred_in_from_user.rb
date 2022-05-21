class RemoveInteresredInFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :interested_in, :string
  end
end
