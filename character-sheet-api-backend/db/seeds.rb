# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c = Character.create(
    {
        name: "Hermione Granger",
        level: 1,
        character_class: "Wizard",
        back_ground: "Acolyte", 
        player_name:"Matt Mercer",
        race: "Human",
        alignment: "Chaotic good",
        experience: 0,
        inspiration: nil,
        proficiency_bonus: 2,
        strength: 10,
        dexterity: 15, 
        constitution: 14, 
        intelligence: 16, 
        wisdom: 12,
        charisma: 8, 
        strength_modifier: 0,
        dexterity_modifier: 2,
        constitution_modifier: 2,
        intelligence_modifier: 3, 
        wisdom_modifier: 1,
        charisma_modifier: -1,
        strength_saving_throw: 0, 
        dexterity_saving_throw: 2, 
        constitution_saving_throw: 2,
        intelligence_saving_throw: 5,
        wisdom_saving_throw: 3, 
        charisma_saving_throw: -1, 
        acrobatics_modifier: 2,
        animal_handling_modifier: 1,
        arcana_modifier: 5, 
        athletics_modifier: 0,
        deception_modifier: -1,
        history_modifier: 3,
        insight_modifier: 3, 
        intimidation_modifier: 1, 
        investigation_modifier: 5, 
        medicine_modifier: 1, 
        nature_modifier: 3, 
        perception_modifier: 3,
        performance_modifier: -1,
        persuasion_modifier: -1,
        religion_modifier: 5, 
        slight_of_hand_modifier: 2,
        stealth_modifier: 2,
        survival_modifier: 1,
        passive_perception: 11,
        other_proficiencies_and_languages: "Proficiencies. Daggers, darts, light
          crossbows, longbows, longswords,
          quarterstaffs, shortbows, shortswords, slings
          Languages. Common, Elvish, Draconic,
          Dwarvish, Goblin",
        armor_class: 12,
        initiative: 2, 
        speed: 30,
        hit_point_maximum: 8, 
        current_hit_points: 8,
        temporary_hit_points: 0,
        hit_dice: "1d6", 
        sucessful_death_saves: nil, 
        failed_death_saves: nil, 
        cp: 0, 
        sp: 0, 
        ep: 0,
        gp: 5,
        pp: 0, 
        personality_traits: "I use polysyllabic words that convey the
          impression of erudition. Also, I’ve spent
          so long in the temple that I have little
          experience dealing with people on a
          casual basis",
        ideals: "Knowledge. The path to power and selfimprovement is through knowledge.", 
        bonds: "The tome I carry with me is the record of
          my life’s work so far, and no vault is secure
          enough to keep it safe",
        flaws: "I’ll do just about anything to uncover
          historical secrets that would add to
          my research.", 
        features_and_traits: "Arcane Recovery. You can regain some of your
          magical energy by studying your spellbook. Once
          per day during a short rest, you can choose to
          recover expended spell slots with a combined
          level equal to or less than half your wizard level
          (rounded up).
          Darkvision. You see in dim light within a
          60-foot radius of you as if it were bright light,
          and in darkness in that radius as if it were dim
          light. You can’t discern color in darkness, only
          shades of gray.
          Fey Ancestry. You have advantage on saving
          throws against being charmed, and magic can’t
          put you to sleep.
          Trance. Elves don’t need to sleep. They
          meditate deeply, remaining semiconscious,
          for 4 hours a day and gain the same benefit a
          human does from 8 hours of sleep.
          Shelter of the Faithful. As a servant of
          Oghma, you command the respect of those
          who share your faith, and you can perform
          the rites of Oghma. You and your companions
          can expect to receive free healing and care
          at a temple, shrine, or other established
          presence of Oghma’s faith. Those who share
          your religion will support you (and only you)
          at a modest lifestyle. You also have ties to the
          temple of Oghma in Neverwinter, where you
          have a residence. When you are in Neverwinter,
          you can call upon the priests there for
          assistance that won’t endanger them.",
        age: 16, 
        height: "5ft 3 inces",
        weight: 112, 
        eyes: "brown", 
        skin: "white", 
        hair: "brown",
        allies_and_organizations: nil, 
        character_backstory: "You have spent your life dedicated to Oghma, all-seeing god of
          knowledge, and spent years learning the lore of the multiverse.
          Personal Goal: Reconsecrate the Defiled Altar. Through visions
          delivered in your trances, your god has called you to a new mission. A
          goblin tribe has made its lair in an ancient ruin now called Cragmaw
          Castle, where they have defiled a shrine once sacred to Oghma. Now
          dedicated to the vile goblin god Maglubiyet, the altar is an offense to
          Oghma that must not stand.
          You’re sure Oghma has greater things in store for you if you can
          complete this quest. In the meantime, your visions suggest that Sister
          Garaele—a priest of Tymora, the goddess of luck—can aid you in the
          town of Phandalin.",
        treasure: "none", 
        spellcasting_ability: "Intelligence",
        spell_save_dc: 16, 
        spell_attack_bonus: 5, 
        level_one_spell_slots: 2,
        level_two_spell_slots: 0,
        level_three_spell_slots: 0,
        level_four_spell_slots: 0, 
        level_five_spell_slots: 0,
        level_six_spell_slots: 0, 
        level_seven_spell_slots: 0, 
        level_eight_spell_slots: 0, 
        level_nine_spell_slots: 0,
        level_one_used_spell_slots: 0,
        level_two_used_spell_slots: 0,
        level_three_used_spell_slots: 0, 
        level_four_used_spell_slots: 0, 
        level_five_used_spell_slots: 0, 
        level_six_used_spell_slots: 0, 
        level_seven_used_spell_slots: 0,
        level_eight_used_spell_slots: 0, 
        level_nine_used_spell_slots: 0
    }
)

c.attacks.build({
    name: "Shortsword",
    attack_bonus: "4",
    damage: "1d6+2",
    damage_type: "piercing"
})

c.equipment.build({
    name: "Shortsword",
    description: "A small sword typically used for stabbing
    1d6 percing damage 2 lbs finesse light"
})

c.equipment.build({
    name: "Component Pouch",
    description: "A small watertight leather belt pouch that has compartments to hold 
    all the material components and other special items you need to cast your spells,
    except for those components that have a specific cost (as indicated in a spells description)"
})

c.equipment.build({
    name: "Spellbook",
    description: "Essential for all wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
})

c.equipment.build({
    name: "Backpack",
    description: "A bag carried over the shoulders that carries treasures and items."
})

c.equipment.build({
    name: "Bottle of Ink",
    description: "A small container filled with ink used for writing"
})

c.equipment.build({
    name: "Ink Pen",
    description: "A small tool used for dipping in ink to write on parchment"
})

c.equipment.build({
    name: "10 Sheets of parchment",
    description: "a paper used for writing on"
})

c.equipment.build({
    name: "Small Knife",
    description: "A small Sharp object used for cutting"
})

c.equipment.build({
    name: "Tome of Historical Lore",
    description: "A book of recorded historical events"
})

c.equipment.build({
    name: "Holy Symbol",
    description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic."
})

c.equipment.build({
    name: "Prayer Book",
    description: "A book of Prayers and lore about a god or pantheon"
})

c.equipment.build({
    name: "Set of Common Clothes",
    description: "A set of clothes for non combat wear"
})

c.equipment.build({
    name: "Pouch",
    description: "A cloth or leather pouch can hold 1/5 cubic foot/ 6 pounds of gear - or up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch."
})

c.spells.build({
    level: 0,
    name: "Mage Hand",
    description: "cantrip conjuration
    Casting Time: 1 action
    Range: 30 feet
    Components: V S
    Duration: 1 minute
    Classes: Bard, Sorcerer, Warlock, Wizard
    A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.
    You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.
    The hand can’t attack, activate magic items, or carry more than 10 pounds."
})

c.spells.build({
    level: 0,
    name: "prestidigitation",
    description: "cantrip transmutation
    Casting Time: 1 action
    Range: 10 feet
    Components: V S
    Duration: Up to 1 hour
    Classes: Bard, Sorcerer, Warlock, Wizard
    This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:
    You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.
    You instantaneously light or snuff out a candle, a torch, or a small campfire.
    You instantaneously clean or soil an object no larger than 1 cubic foot.
    You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
    You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
    You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.
    If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
})

c.spells.build({
    level: 0,
    name: "Ray of Frost",
    description: "cantrip evocation
    Casting Time: 1 action
    Range: 60 feet
    Components: V S
    Duration: Instantaneous
    Classes: Sorcerer, Wizard
    A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn."
})

c.spells.build({
    level: 0,
    name: "Shocking Grasp",
    description: "cantrip evocation
    Casting Time: 1 action
    Range: Touch
    Components: V S
    Duration: Instantaneous
    Classes: Sorcerer, Wizard
    Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can’t take reactions until the start of its next turn."
})

c.spells.build({
    level: 1,
    name: "Burning Hands",
    description: " evocation
    Casting Time: 1 action
    Range: Self (15-foot cone)
    Components: V S
    Duration: Instantaneous
    Classes: Sorcerer, Wizard
    As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried.
    At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
})

c.spells.build({
    level: 1,
    name: "Detect Magic",
    description: " divination(ritual) 
    Casting Time: 1 action
    Range: Self
    Components: V S
    Duration: Up to 10 minutes
    Classes: Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard
    For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.
    The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
})

c.spells.build({
    level: 1,
    name: "Mage Armor",
    description: " abjuration
    Casting Time: 1 action
    Range: Touch
    Components: V S M (A piece of cured leather)
    Duration: 8 hours
    Classes: Sorcerer, Wizard
    You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."
})

c.spells.build({
    level: 1,
    name: "Magic Missile",
    description: " evocation
    Casting Time: 1 action
    Range: 120 feet
    Components: V S
    Duration: Instantaneous
    Classes: Sorcerer, Wizard
    You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.
    At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot above 1st."
})

c.spells.build({
    level: 1,
    name: "Shield",
    description: "abjuration
    Casting Time: 1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell
    Range: Self
    Components: V S
    Duration: 1 round
    Classes: Sorcerer, Wizard
    An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."
})

c.spells.build({
    level: 1,
    name: "Sleep",
    description: " enchantment
    Casting Time: 1 action
    Range: 90 feet
    Components: V S M (A pinch of fine sand, rose petals, or a cricket)
    Duration: 1 minute
    Classes: Bard, Sorcerer, Wizard
    This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren’t affected by this spell.
    At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
})

c.save