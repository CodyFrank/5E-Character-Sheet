class CreateAttacks < ActiveRecord::Migration[6.0]
  def change
    create_table :attacks do |t|
      t.string :name
      t.string :attack_bonus
      t.string :damage
      t.string :damage_type
      t.integer :character_id

      t.timestamps
    end
  end
end
