class SpellSerializer
    
    def initialize(spell_object)
        @spell = spell_object
    end

    def to_serialized_json
        options = {
            include: {
                character:{
                    include: {
                        attacks:{
                            except: [:created_at, :updated_at]
                        },
                        equipment:{
                            except: [:created_at, :updated_at]
                        },
                        spells:{
                            except: [:created_at, :updated_at]
                        },
                    },
                    except: [:created_at, :updated_at],
                },
            },
            except: [:created_at, :updated_at],
        }
        @spell.to_json(options)
    end
end