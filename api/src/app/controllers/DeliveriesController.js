import { Op } from 'sequelize';
import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';

import Order from '../models/Order';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliveriesController {
    async index(req, res) {
        const { deliveryguy_id } = req.params;

        const orders = await Order.findAll({
            where: {
                deliveryguy_id,
                end_date: { [Op.not]: null },
            },
            include: [
                {
                    model: Recipient,
                    as: 'recipient',
                    attributes: ['id', 'name', 'street', 'city', 'state'],
                },
            ],
            order: [['createdAt', 'desc']],
        });

        return res.json(orders);
    }

    async update(req, res) {
        const { orderId } = req.params;
        const { signature_id } = req.body;

        const schema = Yup.object().shape({
            signature_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid signature' });
        }

        const file = await File.findByPk(signature_id);

        if (!file) {
            return res.status(400).json({ error: 'File does not exists' });
        }

        const order = await Order.findByPk(orderId);

        if (!order) {
            return res.status(400).json({ error: 'Order does not exists ' });
        }

        await order.update(
            {
                end_date: new Date(),
                signature_id,
            },
            { new: true }
        );

        return res.json(order);
    }
}

export default new DeliveriesController();
