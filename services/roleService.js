const { Role } = require('../models');

const roleService = {
    getAllRoles: async () => {
        return await Role.findAll();
    },

    getRoleById: async (id) => {
        return await Role.findByPk(id);
    },

    createRole: async (rolesData) => {
        return await Role.bulkCreate(rolesData, { returning: true });
    },

    updateRole: async (id, roleData) => {
        const role = await Role.findByPk(id);
        if (role) {
            return await role.update(roleData);
        }
        return null;
    },

    deleteRole: async (id) => {
        const role = await Role.findByPk(id);
        if (role) {
            await role.destroy();
            return role;
        }
        return null;
    }
};

module.exports = roleService;