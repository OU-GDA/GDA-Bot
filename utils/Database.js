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
 * @param {string[]} newRoles
 * @param {(result: boolean) => void} callBack 
 */
const StoreRole = (newRoles, callBack) =>
{
    GetRoles((roles) => {
        for (const role of newRoles) {
            if (roles.includes(role)) { return callBack(false); }
            roles.push(role);
        }

        fs.writeFile(rolePath, JSON.stringify({ roles: roles }), 'utf8', (err) => {
            if (err) { console.log(err); return callBack(false); }

            callBack(true);
        });
    });
}

/**
 * Remove a role from the database.
 * @param {string[]} targetRoles
 * @param {(result: boolean) => void} callBack 
 */
const RemoveRole = (targetRoles, callBack) =>
{
    GetRoles((roles) => {
        for (const role of targetRoles) {
            const searchValue = role.toLowerCase();
            const index = roles.findIndex((value) => {
                return value.toLowerCase() == searchValue;
            }); 
            
            if (index >= 0) { roles.splice(index, 1); }
            else { return callBack(false); }
        }

        fs.writeFile(rolePath, JSON.stringify({ roles: roles }), 'utf8', (err) => {
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