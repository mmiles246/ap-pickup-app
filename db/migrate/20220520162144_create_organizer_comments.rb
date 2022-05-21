class CreateOrganizerComments < ActiveRecord::Migration[7.0]
  def change
    create_table :organizer_comments do |t|
      t.belongs_to :organizer, null: false, foreign_key: true
      t.belongs_to :town_event, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
