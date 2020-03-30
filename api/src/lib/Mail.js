import nodemailer from 'nodemailer';
import exphbs from 'express-handlebars';
import mailerexphbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';

import mailConfig from '../config/mail';

class Mail {
    constructor() {
        this.init();
    }

    init() {
        const { host, port, secure, auth } = mailConfig;

        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null,
        });

        this.templateConfig();
    }

    templateConfig() {
        const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

        this.transporter.use(
            'compile',
            mailerexphbs({
                viewEngine: exphbs.create({
                    layoutsDir: resolve(viewPath, 'layouts'),
                    partialsDir: resolve(viewPath, 'partials'),
                    defaultLayout: 'default',
                    extname: '.hbs',
                }),
                viewPath,
                extName: '.hbs',
            })
        );
    }

    sendMail(message) {
        return this.transporter.sendMail({
            ...message,
            ...mailConfig.default,
        });
    }
}

export default new Mail();
