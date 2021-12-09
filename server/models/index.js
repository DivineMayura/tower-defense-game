
/*
***
*** I'm not including cost in skills because cost will be independent of skill
***     and it will instead depend on how leveled that units skill tree is
***
***
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
const ProfileUpgrades = require("./ProfileUpgrades");
const Skills = require("./Skills");
const Towers = require("./Towers");
const Archer = require("./Archer");
const Mage = require("./Mage");
const Knight = require("./Knight");


module.exports = { Account, Skills, Archer }