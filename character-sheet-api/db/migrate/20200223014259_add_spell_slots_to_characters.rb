class AddSpellSlotsToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :level_one_spell_slots, :integer
    add_column :characters, :level_two_spell_slots, :integer
    add_column :characters, :level_three_spell_slots, :integer
    add_column :characters, :level_four_spell_slots, :integer
    add_column :characters, :level_five_spell_slots, :integer
    add_column :characters, :level_six_spell_slots, :integer
    add_column :characters, :level_seven_spell_slots, :integer
    add_column :characters, :level_eight_spell_slots, :integer
    add_column :characters, :level_nine_spell_slots, :integer
    add_column :characters, :level_one_used_spell_slots, :integer
    add_column :characters, :level_two_used_spell_slots, :integer
    add_column :characters, :level_three_used_spell_slots, :integer
    add_column :characters, :level_four_used_spell_slots, :integer
    add_column :characters, :level_five_used_spell_slots, :integer
    add_column :characters, :level_six_used_spell_slots, :integer
    add_column :characters, :level_seven_used_spell_slots, :integer
    add_column :characters, :level_eight_used_spell_slots, :integer
    add_column :characters, :level_nine_used_spell_slots, :integer
  end
end
