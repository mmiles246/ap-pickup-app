class CreateUserComments < ActiveRecord::Migration[7.0]
  def change
    create_table :user_comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :town_event, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
