import { Sequelize } from 'sequelize';

import User from '../app/models/User';
import Deliveryguy from '../app/models/Deliveryguy';
import Recipient from '../app/models/Recipient';
import Order from '../app/models/Order';
import Delivery_Problem from '../app/models/Delivery_Problem';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, Deliveryguy, Recipient, Order, Delivery_Problem, File];
class Database {
    constructor() {
        this.connection = new Sequelize(databaseConfig);
        this.init();
    }

    init() {
        models.map(model => model.init && model.init(this.connection));
        models.map(
            model => model.associate && model.associate(this.connection.models)
        );
    }
}

export default new Database();
