const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
***
*** @unlocked: Only allow the player to create this unit if they have it unlocked.
*** @unitPrice: How Much it's going to cost to place the Unit
*** @upgradeCost: Cost to upgrade the placed Unit.
***     Probably is mostly going to increase fire rate or something unless stated otherwise.
***     This only persists per unit per level.
***     I might make this a local storage thing, because it only relates to each level.
***         Default cost to upgrade the archer in battle is double the unit Price
***             unless I add a permanent upgrade that reduces cost
*** @skillCost: Cost to purchase an upgrade in the skill tree, this permanently upgrades the unit across levels.
***     Allows the player to increase their strength incrementally as the game progressively becomes more difficult.
***
*/



const archerSchema = new Schema({
    name: {
        type: String,
        default: "Archer"
    },
    description: {
        type: String
    },
    // Only allow the player to create this unit if they have it unlocked.
    unlocked: {
        type: Boolean,
        required: true,
        default: true
    },
    // How Much it's going to cost to place the Unit
    unitPrice: {
        type: Number,
        required: true,
        default: 30
    },
    // Cost to upgrade the placed Unit
    // Probably is mostly going to increase fire rate or something unless stated otherwise.
    // This only persists per unit per level.
    upgradeCost: {
        type: Number,
        required: true,
        // default cost to upgrade the archer in battle is double the unitPrice
        default: 60,
        // Set a minimum incase I add an upgrade that reduces cost
        min: 35
    },
    // Cost to purchase an upgrade in the skill tree, this permanently upgrades the unit across levels.
    //      Allows the player to increase their strength incrementally as the game progressively becomes more difficult.
    skillCost: {
        type: Number,
        required: true,
        min: 60
    },
    // I thiiink it's better to specifiy the class of skills...
    // skills: [Skills.Schema]
    skills: [ArcherSkills.schema]
})

const Archer = mongoose.model("Archer", archerSchema);

module.exports = Archer;