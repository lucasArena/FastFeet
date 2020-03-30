import Sequelize, { Model } from 'sequelize';

class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                product: Sequelize.STRING,
                start_date: Sequelize.DATE,
                end_date: Sequelize.DATE,
                canceled_at: Sequelize.DATE,
            },
            { sequelize }
        );
    }

    static associate(models) {
        this.belongsTo(models.Recipient, {
            foreignKey: 'recipient_id',
            as: 'recipient',
        });

        this.belongsTo(models.File, {
            foreignKey: 'signature_id',
            as: 'signature',
        });

        this.belongsTo(models.Deliveryguy, {
            foreignKey: 'deliveryguy_id',
            as: 'deliveryguy',
        });
    }
}

export default Order;
