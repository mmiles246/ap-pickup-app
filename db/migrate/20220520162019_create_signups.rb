class CreateSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :signups do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :town_event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
