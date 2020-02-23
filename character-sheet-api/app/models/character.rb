class Character < ApplicationRecord
    has_many :equipment
    has_many :attacks
end
