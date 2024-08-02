const roleService = require('../services/roleService');

const roleController = {
    getAllRoles: async (req, res) => {
        try {
            const roles = await roleService.getAllRoles();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getRoleById: async (req, res) => {
        try {
            const role = await roleService.getRoleById(req.params.id);
            if (role) {
                res.json(role);
            } else {
                res.status(404).json({ message: 'Role not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createRole: async (req, res) => {
        try {
            const rolesData = req.body;
        
            if (!Array.isArray(rolesData) || rolesData.some(role => !role.name )) {
              return res.status(400).json({ message: 'Invalid data format' });
            }
        
            const roles = await roleService.createRole(rolesData);
            res.status(201).json(roles);
          } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateRole: async (req, res) => {
        try {
            const role = await roleService.updateRole(req.params.id, req.body);
            if (role) {
                res.json(role);
            } else {
                res.status(404).json({ message: 'Role not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteRole: async (req, res) => {
        try {
            const role = await roleService.deleteRole(req.params.id);
            if (role) {
                res.json({ message: 'Role deleted successfully' });
            } else {
                res.status(404).json({ message: 'Role not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = roleController;
