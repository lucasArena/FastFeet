module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('delivery_problems', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            order_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'orders',
                    as: 'order',
                    key: 'id',
                    onUpdate: 'SET NULL',
                    onDelete: 'CASCADE',
                    allowNull: false,
                },
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('delivery_problems');
    },
};
