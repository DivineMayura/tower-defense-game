const mongoose = require("mongoose");
const { Schema } = mongoose;



const increaseRangeOneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // This int will be passed through math or something to effect the units total distance.
    fireDistance: {
        type: Number,
        required: true
    }
});

const IncreaseRangeOne = mongoose.model("IncreaseRangeOne", increaseRangeOneSchema);

module.exports = IncreaseRangeOne;