import Order from '../models/Order';
import Recipient from '../models/Recipient';

class PendentController {
    async index(req, res) {
        const { deliveryguy_id } = req.params;
        const orders = await Order.findAll({
            where: { deliveryguy_id, end_date: null, canceled_at: null },
            include: [
                {
                    model: Recipient,
                    as: 'recipient',
                    attributes: ['id', 'name', 'street', 'city', 'state'],
                },
            ],
        });

        return res.json(orders);
    }
}

export default new PendentController();
