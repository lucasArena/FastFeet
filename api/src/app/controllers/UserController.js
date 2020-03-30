import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            res.status(400).json({ error: 'Invalid request' });
        }

        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.json(user);
    }
}

export default new UserController();
