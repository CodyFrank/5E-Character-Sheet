class Character < ApplicationRecord
    has_many :equipment
    has_many :attacks
    has_many :spells
end
