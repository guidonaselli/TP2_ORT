import Role from "../Models/Role.js"

const roleSeed = async () => { 
    await Role.bulkCreate([
        {roleName: 'admin'},
        {roleName: 'user'},
    ]);
 };

export default roleSeed