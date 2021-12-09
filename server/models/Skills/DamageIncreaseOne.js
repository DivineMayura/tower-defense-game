const mongoose = require("mongoose");
const { Schema } = mongoose;



const damageIncreaseOneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // This int will be passed through math or something to effect the units total damage.
    damage: {
        type: Number,
        required: true
    }
});

const DamageIncreaseOne = mongoose.model("DamageIncreaseOne", DamageIncreaseOne);

module.exports = DamageIncreaseOne;