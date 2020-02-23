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
end
