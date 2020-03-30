import Sequelize, { Model } from 'sequelize';

class Delivery_Problem extends Model {
    static init(sequelize) {
        super.init(
            {
                order_id: Sequelize.INTEGER,
                description: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'delivery_problems',
            }
        );
    }

    static associate(models) {
        return this.belongsTo(models.Order, {
            foreignKey: 'order_id',
            as: 'order',
        });
    }
}

export default Delivery_Problem;
