class Api::V1::SpellsController < ApplicationController

    def create
        character = Character.find_by(id: spell_params[:character_id])
        if spell = character.spells.build(spell_params)
            render json: SpellSerializer.new(spell).to_serialized_json
        else
            render json: {message: "Creating that Spell failed"}
        end

    def update
        spell = Spell.find_by(id: params[:id])
        if Spell.update(spell_params)
            render json: SpellSerializer.new(spell).to_serialized_json
        else
            render json: {message: "Cannot update that Spell"}
        end
    end

    def destroy
        if spell = Spell.find_by(id: params[:id]).destroy
            render json: {spellId: spell.id}
        else
            render json: {message: "Cannot delete that spell"}
        end
    end

    private

    def spell_params
        params.require(:spell).permit(:level, :name, :description, :character_id)
    end

end