class Character < ApplicationRecord
    has_many :equipment, :dependent => :delete_all
    has_many :attacks, :dependent => :delete_all
    has_many :spells, :dependent => :delete_all
end
