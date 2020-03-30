module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('recipients', 'street', Sequelize.STRING),
            queryInterface.addColumn('recipients', 'number', Sequelize.INTEGER),
            queryInterface.addColumn(
                'recipients',
                'complement',
                Sequelize.STRING
            ),
            queryInterface.addColumn('recipients', 'city', Sequelize.STRING),
            queryInterface.addColumn('recipients', 'state', Sequelize.STRING),
            queryInterface.addColumn('recipients', 'zipcode', Sequelize.STRING),
        ]);
    },

    down: queryInterface => {
        return Promise.all([
            queryInterface.removeColumn('recipients', 'street'),
            queryInterface.removeColumn('recipients', 'number'),
            queryInterface.removeColumn('recipients', 'complement'),
            queryInterface.removeColumn('recipients', 'city'),
            queryInterface.removeColumn('recipients', 'state'),
            queryInterface.removeColumn('recipients', 'zipcode'),
        ]);
    },
};
