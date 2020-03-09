class Api::V1::AttacksController < ApplicationController
    def create
        character = Character.find_by(id: attack_params[:character_id])
        attack = character.attacks.build(attack_params)
        if attack.save
            render json: AttackSerializer.new(attack).to_serialized_json
        else
            render json: {message: "Creating that Attack failed"}
        end
    end

    def update
        attack = Attack.find_by(id: params[:id])
        if Attack.update(attack_params)
            render json: AttackSerializer.new(attack).to_serialized_json
        else
            render json: {message: "Cannot update that Attack"}
        end
    end

    def destroy
        if attack = Attack.find_by(id: params[:id]).destroy
            render json: {
                attackId: attack.id,
                characterId: attack.character.id
            }
        else
            render json: {message: "Cannot delete that attack"}
        end
    end

    private

    def attack_params
        params.require(:attack).permit(:name, :attack_bonus, :damage, :damage_type, :character_id)
    end

end
