module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'fastfeet',
    define: {
        underscored: true,
        underscoredAll: true,
        timestamps: true,
    },
};
