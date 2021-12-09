const mongoose = require("mongoose");
const { Schema } = mongoose;

/*
***
*** Basically, this is the archer skill tree...
***
*/

const archerSkillsSchema = new Schema({
    skillOne: QuickReload.schema,
    skillTwo: IncreaseRangeOne.schema,
    skillThree: DamageIncreaseOne.schema
});

const ArcherSkills = mongoose.model("ArcherSkills", archerSkillsSchema);

module.exports = ArcherSkills;