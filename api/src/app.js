import express from 'express';
import cors from 'cors';
import { resolve } from 'path';

import routes from './routes';

import './database';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    init() {}

    routes() {
        this.server.use(routes);
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(
            '/files',
            express.static(resolve(__dirname, '..', 'uploads'))
        );
    }
}

export default new App().server;
