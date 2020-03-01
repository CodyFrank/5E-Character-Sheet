class Api::V1::CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: CharacterSerializer.new(characters).to_serialized_json
    end

    def show
        if character = Character.find_by(id: params[:id])
            render json: CharacterSerializer.new(character).to_serialized_json
        else
            render json: {message: "Cannot find a Character with that ID"}
        end
    end

    def create
        character = Character.new(character_params)
        if character.save
            render json: CharacterSerializer.new(character).to_serialized_json
        else
            render json: {message: "Creating that Character Failed"}
        end
    end

    def update
        character = Character.find_by(id: params[:id])
        if character.update(character_params)
            render json: CharacterSerializer.new(character).to_serialized_json
        else
            render json: {message: "Updating that Character Failed"}
        end
    end

    def destroy
        if character = Character.find_by(id: params[:id]).destroy
            render json: {characterId: character.id}
        else
            render json: {message: "Deleting that Character Failed"}
        end
    end

    private

    def character_params
        params.require(:character).permit(
            :name,
            :level,
            :character_class,
            :back_ground,
            :player_name,
            :race,
            :alignment,
            :experience,
            :inspiration,
            :proficiency_bonus,
            :strength,
            :dexterity,
            :constitution,
            :intelligence,
            :wisdom,
            :charisma,
            :strength_modifier,
            :dexterity_modifier,
            :constitution_modifier,
            :intelligence_modifier,
            :wisdom_modifier,
            :charisma_modifier,
            :strength_saving_throw,
            :dexterity_saving_throw,
            :constitution_saving_throw,
            :intelligence_saving_throw,
            :wisdom_saving_throw,
            :charisma_saving_throw,
            :acrobatics_modifier,
            :animal_handling_modifier,
            :arcana_modifier,
            :athletics_modifier,
            :deception_modifier,
            :history_modifier,
            :insight_modifier,
            :intimidation_modifier,
            :investigation_modifier,
            :medicine_modifier,
            :nature_modifier,
            :perception_modifier,
            :performance_modifier,
            :persuasion_modifier,
            :religion_modifier,
            :slight_of_hand_modifier,
            :stealth_modifier,
            :survival_modifier,
            :passive_perception,
            :other_proficiencies_and_languages,
            :armor_class,
            :initiative,
            :speed,
            :hit_point_maximum,
            :current_hit_points,
            :temporary_hit_points,
            :hit_dice,
            :sucessful_death_saves,
            :failed_death_saves,
            :cp,
            :sp,
            :ep,
            :gp,
            :pp,
            :personality_traits,
            :ideals,
            :bonds,
            :flaws,
            :features_and_traits,
            :age,
            :height,
            :weight,
            :eyes,
            :skin,
            :hair,
            :allies_and_organizations,
            :character_backstory,
            :treasure,
            :spellcasting_ability,
            :spell_save_dc,
            :spell_attack_bonus,
            :level_one_spell_slots,
            :level_two_spell_slots,
            :level_three_spell_slots,
            :level_four_spell_slots,
            :level_five_spell_slots,
            :level_six_spell_slots,
            :level_seven_spell_slots,
            :level_eight_spell_slots,
            :level_nine_spell_slots,
            :level_one_used_spell_slots,
            :level_two_used_spell_slots,
            :level_three_used_spell_slots,
            :level_four_used_spell_slots,
            :level_five_used_spell_slots,
            :level_six_used_spell_slots,
            :level_seven_used_spell_slots,
            :level_eight_used_spell_slots,
            :level_nine_used_spell_slots
        )
    end
end
