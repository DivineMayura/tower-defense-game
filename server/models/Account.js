const mongoose = require("mongoose");
const { Schema } = mongoose;

const bcrypt = require("bcrypt");

const Profile = require("./Profile");

/*
***
*** Regarding the profile, if I ever wish to expand
***     the user could sign in with the same account across my different games
***     so they don't have to make a new one every single time.
***
*/




const accountSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    profile: Profile.schema
})

// If this is a new or modified password then salt round it.
accountSchema.pre("save", async function(next) {
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});

// This compares the user inserted password to the stored bcrypted password.
accountSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;