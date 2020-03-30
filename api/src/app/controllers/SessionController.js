import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            res.status(400).json({ error: 'Invalid request' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            res.status(401).json({ error: 'User does not exists' });
        }

        if (!(await user.checkPassword(password))) {
            res.status(401).json({ error: 'Password does not match' });
        }

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        });

        res.json({
            user: { name: user.name, email },
            token,
        });
    }
}

export default new SessionController();
