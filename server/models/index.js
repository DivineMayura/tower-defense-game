
/*
***
*** @Account will be username,password,email & have one profile
*** @Profile will have @Towers & something else, idk yet
*** @Towers will have @Archer, @Mage, @Knight
***     @Archer will have an associated skill Tree
***     @Mage will have an associated skill Tree
***     @Knight will have an associated skill Tree
***
*/

const Account = require("./Account");
const Profile = require("./Profile");
const Towers = require("./Towers");
const Archer = require("./Archer");
const Mage = require("./Mage");
const Knight = require("./Knight");



module.exports = { Account }