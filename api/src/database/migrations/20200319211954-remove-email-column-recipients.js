module.exports = {
    up: queryInterface => {
        return queryInterface.removeColumn('recipients', 'email');
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'recipients',
            'email',
            Sequelize.STRING
        );
    },
};
