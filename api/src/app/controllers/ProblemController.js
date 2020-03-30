import * as Yup from 'yup';

import Problem from '../models/Delivery_Problem';
import Order from '../models/Order';
import Deliveryguy from '../models/Deliveryguy';

import Queue from '../../lib/Queue';

import CancellationOrderMail from '../jobs/CancellationOrderMail';

class ProblemController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const problems = await Problem.findAll({
            limit: 8,
            offset: (page - 1) * 8,
            include: [
                {
                    model: Order,
                    as: 'order',
                    attributes: ['id', 'canceled_at'],
                    where: {
                        canceled_at: null,
                    },
                },
            ],
        });

        return res.json(problems);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const { orderId: order_id } = req.params;
        const { description } = req.body;

        const deliveryExits = await Order.findOne({ where: { id: order_id } });

        if (!deliveryExits) {
            return res.status(400).json({ error: 'Order does not exists' });
        }

        const problems = await Problem.create({
            order_id,
            description,
        });

        return res.json(problems);
    }

    async find(req, res) {
        const { orderId: order_id } = req.params;
        const problems = await Problem.findAll({ where: { order_id } });

        return res.json(problems);
    }

    async delete(req, res) {
        const { orderId } = req.params;

        const problem = await Problem.findByPk(orderId);

        if (!problem) {
            return res.status(400).json({ error: 'Problem does not exists' });
        }

        const order = await Order.findOne({
            where: { id: orderId },
            include: {
                model: Deliveryguy,
                as: 'deliveryguy',
                attributes: ['name', 'email'],
            },
        });

        if (order.canceled_at) {
            return res.status(400).json({ error: 'Order already canceled' });
        }

        await order.update(
            {
                canceled_at: new Date(),
            },
            { new: true }
        );

        await Queue.add(CancellationOrderMail.key, {
            name: order.deliveryguy.name,
            email: order.deliveryguy.email,
            product: order.product,
        });

        return res.json(order);
    }
}

export default new ProblemController();
