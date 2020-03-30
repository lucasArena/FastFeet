import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                street: Sequelize.STRING,
                number: Sequelize.NUMBER,
                complement: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                zipcode: Sequelize.STRING,
            },
            { sequelize }
        );
    }
}

export default Recipient;
