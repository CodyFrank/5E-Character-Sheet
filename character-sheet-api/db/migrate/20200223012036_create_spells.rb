class CreateSpells < ActiveRecord::Migration[6.0]
  def change
    create_table :spells do |t|
      t.integer :level
      t.string :name
      t.text :description
      t.integer :character_id

      t.timestamps
    end
  end
end
