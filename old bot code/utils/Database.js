const fs = require('fs');

const rolePath = './data/roles.json';

/**
 * Returns an array of available roles.
 * @param {(roles: string[]) => void} callBack 
 */
const GetRoles = (callBack) =>
{
    fs.readFile(rolePath, 'utf8', async (err, data) =>
    {
        if (err) { console.log(err); callBack([]); }

        const obj = JSON.parse(data);
        callBack(obj.roles);
    });
}

/**
 * Stores a new role in the database.
 * @param {string} newRole 
 * @param {(result: boolean) => void} callBack 
 */
const StoreRole = (newRole, callBack) =>
{
    GetRoles((roles) => {
        if (roles.includes(newRole)) { return callBack(false); }
        roles.push(newRole);

        fs.writeFile(rolePath, JSON.stringify({roles: roles}), 'utf8', (err) => 
        {
            if (err) { console.log(err); return callBack(false); }

            callBack(true);
        });
    });
}

/**
 * Remove a role from the database.
 * @param {string} targetRole 
 * @param {(result: boolean) => void} callBack 
 */
const RemoveRole = (targetRole, callBack) =>
{
    const searchValue = targetRole.toLowerCase();
    GetRoles((roles) => {
        roles.splice(roles.findIndex((value) => {
            value.toLowerCase() === searchValue;
        }), 1);

        fs.writeFile(rolePath, JSON.stringify({roles: roles}), 'utf8', (err) => 
        {
            if (err) { console.log(err); return callBack(false); }

            callBack(true);
        });
    });
}

module.exports = {
    GetRoles: GetRoles,
    StoreRole: StoreRole,
    RemoveRole: RemoveRole
}