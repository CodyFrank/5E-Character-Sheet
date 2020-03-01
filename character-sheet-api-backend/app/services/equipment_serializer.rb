class EquipmentSerializer
    
    def initialize(equipment_object)
        @equipment = equipment_object
    end

    def to_serialized_json
        options = {
            include: {
                day:{
                    except: [:created_at, :updated_at]
                },
            },
            except: [:created_at, :updated_at],
        }
        @equipment.to_json(options)
    end
end