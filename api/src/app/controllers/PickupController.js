import * as Yup from 'yup';
import { parseISO, format } from 'date-fns';
import { Op } from 'sequelize';

import Order from '../models/Order';

class PickupController {
    async update(req, res) {
        const schema = Yup.object().shape({
            start_date: Yup.date().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const { orderId } = req.params;
        const { start_date } = req.body;

        const formattedHour = parseISO(start_date).getHours();

        if (parseInt(formattedHour) < 8 || parseInt(formattedHour) > 18) {
            return res.status(400).json({
                error: 'Order can only be picked up between 08:00 and 18:00',
            });
        }

        const order = await Order.findByPk(orderId);

        if (!order) {
            return res.status(400).json({ error: 'Order does not exists' });
        }

        const formattedDate = format(parseISO(start_date), 'yyyy-MM-dd');

        const allOrder = await Order.findAll({
            where: {
                deliveryguy_id: order.deliveryguy_id,
                start_date: {
                    [Op.not]: null,
                },
            },
        });

        const countOrder = allOrder.filter(
            orderMap =>
                format(orderMap.start_date, 'yyyy-MM-dd') === formattedDate
        );

        if (countOrder.length === 5) {
            return res.status(400).json({
                error: 'You only can not pickup more than 5 order per day',
            });
        }

        await order.update(
            {
                start_date,
            },
            { new: true }
        );

        return res.json(order);
    }
}

export default new PickupController();
