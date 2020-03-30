import * as Yup from 'yup';

import Deliveryguy from '../models/Deliveryguy';
import File from '../models/File';

class DeliveryguyController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const deliveryguys = await Deliveryguy.findAll({
            offset: (page - 1) * 8,
            limit: 8,
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });
        return res.json(deliveryguys);
    }

    async find(req, res) {
        const { id } = req.params;

        if (isNaN(id)) {
            return res
                .status(400)
                .json({ error: 'O id não é um número valído' });
        }

        const deliveryguy = await Deliveryguy.findByPk(id, {
            attributes: ['id', 'name', 'email', 'created_at'],
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });

        if (!deliveryguy) {
            return res
                .status(400)
                .json({ error: 'Deliveryguy does not exist' });
        }

        return res.json(deliveryguy);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const { email, name } = req.body;

        const deliveryguyExists = await Deliveryguy.findOne({
            where: { email },
        });

        if (deliveryguyExists) {
            return res
                .status(400)
                .json({ error: 'Email already exists for delivery guys' });
        }

        const deliveryguy = await Deliveryguy.create({
            name,
            email,
        });

        return res.json(deliveryguy);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            avatar_id: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const { id } = req.params;
        const { name, email, avatar_id } = req.body;

        const deliveryguy = await Deliveryguy.findByPk(id, {
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });

        if (!deliveryguy) {
            return res.status(400).json({ error: 'Deliverguy not found' });
        }

        await deliveryguy.update(
            {
                name,
                email,
                avatar_id,
            },
            { new: true }
        );

        return res.json(deliveryguy);
    }

    async delete(req, res) {
        const { id } = req.params;

        const deliveryguy = await Deliveryguy.findOne({
            where: {
                id,
            },
        });

        if (!deliveryguy) {
            return res.status(400).json({ error: 'Delivery guy not found' });
        }

        await deliveryguy.destroy();

        return res.json(deliveryguy);
    }
}

export default new DeliveryguyController();
