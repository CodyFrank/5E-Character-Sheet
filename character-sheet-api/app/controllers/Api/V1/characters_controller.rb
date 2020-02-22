class Api::V1::CharactersController < ApplicationController
    def index
        @characters = Characters.all

        render json: @characters, status 200
    end

end
