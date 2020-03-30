import * as Yup from 'yup';
import { parseISO } from 'date-fns';

import Deliveryguy from '../models/Deliveryguy';
import Recipient from '../models/Recipient';
import Order from '../models/Order';
import File from '../models/File';
import CreateOrderMail from '../jobs/CreateOrderMail';

import Queue from '../../lib/Queue';

class OrderController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const order = await Order.findAll({
            attributes: ['id', 'product', 'start_date', 'canceled_at'],
            limit: 8,
            offset: (page - 1) * 8,
            include: [
                {
                    model: Recipient,
                    as: 'recipient',
                    attributes: ['name', 'city', 'state'],
                },
                {
                    model: Deliveryguy,
                    as: 'deliveryguy',
                    attributes: ['name'],
                },
            ],
        });

        return res.json(order);
    }

    async find(req, res) {
        const { id } = req.params;

        const order = await Order.findByPk(id, {
            attributes: [
                'id',
                'product',
                'start_date',
                'end_date',
                'recipient_id',
                'deliveryguy_id',
            ],
            include: [
                {
                    model: Deliveryguy,
                    as: 'deliveryguy',
                    attributes: ['id', 'name'],
                },
                {
                    model: Recipient,
                    as: 'recipient',
                    attributes: [
                        'id',
                        'name',
                        'street',
                        'city',
                        'state',
                        'zipcode',
                    ],
                },
                {
                    model: File,
                    as: 'signature',
                    attributes: ['id', 'name', 'path'],
                },
            ],
        });

        if (!order) {
            return res.status(400).json({ error: 'Order does not exits' });
        }

        return res.json(order);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            recipient_id: Yup.number().required(),
            deliveryguy_id: Yup.number().required(),
            product: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const { recipient_id, deliveryguy_id, product } = req.body;

        const deliveryguy = await Deliveryguy.findByPk(deliveryguy_id);

        if (!deliveryguy) {
            return res
                .status(400)
                .json({ error: 'Deliverguy does not exists' });
        }

        const recipient = await Recipient.findByPk(recipient_id);

        if (!recipient) {
            return res.status(400).json({ error: 'Recipient does not exists' });
        }

        const order = await Order.create({
            recipient_id,
            deliveryguy_id,
            product,
        });

        await Queue.add(CreateOrderMail.key, {
            deliveryguy,
            product,
        });

        return res.json(order);
    }

    async update(req, res) {
        const { recipient_id, deliveryguy_id, product, start_date } = req.body;
        const { id } = req.params;

        const formattedDate = parseISO(start_date).getHours();

        if (parseInt(formattedDate) < 8 || parseInt(formattedDate) > 18) {
            return res.status(400).json({
                error: 'Order can only be created between 08:00 and 18:00',
            });
        }

        const deliveryguy = await Deliveryguy.findOne({
            where: { id: deliveryguy_id },
        });

        if (!deliveryguy) {
            return res
                .status(400)
                .json({ error: 'Deliverguy does not exists' });
        }

        const recipient = await Recipient.findOne({
            where: {
                id: recipient_id,
            },
        });

        if (!recipient) {
            return res.status(400).json({ error: 'Recipient does not exists' });
        }

        const order = await Order.findOne({ where: { id } });

        await order.update(
            {
                recipient_id,
                deliveryguy_id,
                product,
                start_date,
            },
            { new: true }
        );

        return res.json(order);
    }

    async delete(req, res) {
        const { id } = req.params;

        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(400).json({ error: 'Order not found' });
        }

        await order.update({
            canceled_at: new Date(),
        });

        return res.json(order);
    }
}

export default new OrderController();
