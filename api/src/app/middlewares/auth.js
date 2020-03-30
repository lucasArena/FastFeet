import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(400).json({ error: 'Token not provided' });
    }

    const [, token] = authToken.split(' ');

    try {
        const { id } = await promisify(jwt.verify)(token, authConfig.secret);

        res.userId = id;

        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
