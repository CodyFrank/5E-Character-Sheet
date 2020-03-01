# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_01_182407) do

  create_table "attacks", force: :cascade do |t|
    t.string "name"
    t.string "attack_bonus"
    t.string "damage"
    t.string "damage_type"
    t.integer "character_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.string "character_class"
    t.string "back_ground"
    t.string "player_name"
    t.string "race"
    t.string "alignment"
    t.integer "experience"
    t.string "inspiration"
    t.integer "proficiency_bonus"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "constitution"
    t.integer "intelligence"
    t.integer "wisdom"
    t.integer "charisma"
    t.integer "strength_modifier"
    t.integer "dexterity_modifier"
    t.integer "constitution_modifier"
    t.integer "intelligence_modifier"
    t.integer "wisdom_modifier"
    t.integer "charisma_modifier"
    t.integer "strength_saving_throw"
    t.integer "dexterity_saving_throw"
    t.integer "constitution_saving_throw"
    t.integer "intelligence_saving_throw"
    t.integer "wisdom_saving_throw"
    t.integer "charisma_saving_throw"
    t.integer "acrobatics_modifier"
    t.integer "animal_handling_modifier"
    t.integer "arcana_modifier"
    t.integer "athletics_modifier"
    t.integer "deception_modifier"
    t.integer "history_modifier"
    t.integer "insight_modifier"
    t.integer "intimidation_modifier"
    t.integer "investigation_modifier"
    t.integer "medicine_modifier"
    t.integer "nature_modifier"
    t.integer "perception_modifier"
    t.integer "performance_modifier"
    t.integer "persuasion_modifier"
    t.integer "religion_modifier"
    t.integer "slight_of_hand_modifier"
    t.integer "stealth_modifier"
    t.integer "survival_modifier"
    t.integer "passive_perception"
    t.text "other_proficiencies_and_languages"
    t.integer "armor_class"
    t.integer "initiative"
    t.integer "speed"
    t.integer "hit_point_maximum"
    t.integer "current_hit_points"
    t.integer "temporary_hit_points"
    t.string "hit_dice"
    t.integer "sucessful_death_saves"
    t.integer "failed_death_saves"
    t.integer "cp"
    t.integer "sp"
    t.integer "ep"
    t.integer "gp"
    t.integer "pp"
    t.text "personality_traits"
    t.text "ideals"
    t.text "bonds"
    t.text "flaws"
    t.text "features_and_traits"
    t.integer "age"
    t.string "height"
    t.integer "weight"
    t.string "eyes"
    t.string "skin"
    t.string "hair"
    t.text "allies_and_organizations"
    t.text "character_backstory"
    t.text "treasure"
    t.string "spellcasting_ability"
    t.integer "spell_save_dc"
    t.integer "spell_attack_bonus"
    t.integer "level_one_spell_slots"
    t.integer "level_two_spell_slots"
    t.integer "level_three_spell_slots"
    t.integer "level_four_spell_slots"
    t.integer "level_five_spell_slots"
    t.integer "level_six_spell_slots"
    t.integer "level_seven_spell_slots"
    t.integer "level_eight_spell_slots"
    t.integer "level_nine_spell_slots"
    t.integer "level_one_used_spell_slots"
    t.integer "level_two_used_spell_slots"
    t.integer "level_three_used_spell_slots"
    t.integer "level_four_used_spell_slots"
    t.integer "level_five_used_spell_slots"
    t.integer "level_six_used_spell_slots"
    t.integer "level_seven_used_spell_slots"
    t.integer "level_eight_used_spell_slots"
    t.integer "level_nine_used_spell_slots"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "character_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "spells", force: :cascade do |t|
    t.integer "level"
    t.string "name"
    t.text "description"
    t.integer "character_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
