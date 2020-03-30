module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('orders', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            recipient_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'recipients',
                    key: 'id',
                    allowNull: true,
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            deliveryguy_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'deliveryguys',
                    as: 'deliveryguy',
                    key: 'id',
                    allowNull: false,
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            product: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            canceled_at: {
                type: Sequelize.DATE,
                allowNull: true,
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
        return queryInterface.dropTable('orders');
    },
};
