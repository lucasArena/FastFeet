import Sequelize, { Model } from 'sequelize';

class Deliveryguy extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        return this.belongsTo(models.File, {
            foreignKey: 'avatar_id',
            as: 'avatar',
        });
    }
}

export default Deliveryguy;
