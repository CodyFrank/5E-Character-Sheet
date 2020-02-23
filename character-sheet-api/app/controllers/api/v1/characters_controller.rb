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

end
