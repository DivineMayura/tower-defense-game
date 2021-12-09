const mongoose = require("mongoose");
const { Schema } = mongoose;



const quickReloadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // This int will be passed through math or something to effect the units total fire rate.
    fireRate: {
        type: Number,
        required: true
    }
});

const QuickReload = mongoose.model("QuickReload", quickReloadSchema);

module.exports = QuickReload;