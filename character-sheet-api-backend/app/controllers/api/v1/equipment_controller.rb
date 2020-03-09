class Api::V1::EquipmentController < ApplicationController
    def create
        character = Character.find_by(id: equipment_params[:character_id])
        equipment = character.equipment.build(equipment_params)
        if equipment.save
            render json: EquipmentSerializer.new(equipment).to_serialized_json
        else
            render json: {message: "Creating that Equipment failed"}
        end
    end

    def update
        equipment = Equipment.find_by(id: params[:id])
        if Equipment.update(equipment_params)
            render json: EquipmentSerializer.new(equipment).to_serialized_json
        else
            render json: {message: "Cannot update that Equipment"}
        end
    end

    def destroy
        if equipment = Equipment.find_by(id: params[:id]).destroy
            render json: {
                equipmentId: equipment.id,
                CharacterId: equipment.character_id
            }
        else
            render json: {message: "Cannot delete that equipment"}
        end
    end

    private

    def equipment_params
        params.require(:equipment).permit(:name, :description, :character_id)
    end
end
