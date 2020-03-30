import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const recipient = await Recipient.findAll({
            limit: 8,
            offset: (page - 1) * 8,
            attributes: ['id', 'name', 'street'],
        });
        return res.json(recipient);
    }

    async find(req, res) {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Id is not numeric' });
        }

        const recipient = await Recipient.findByPk(id);

        if (!recipient) {
            return res.status(400).json({ error: 'Receiver does not exists' });
        }

        return res.json(recipient);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            address: Yup.object({
                street: Yup.string().required(),
                number: Yup.number().required(),
                complement: Yup.string(),
                city: Yup.string().required(),
                state: Yup.string().required(),
                zipcode: Yup.string().required(),
            }),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const {
            name,
            address: { street, number, complement, city, state, zipcode },
        } = req.body;

        const recipient = await Recipient.create({
            name,
            street,
            number,
            complement,
            city,
            state,
            zipcode,
        });

        return res.json(recipient);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            address: Yup.object({
                street: Yup.string().required(),
                number: Yup.number().required(),
                complement: Yup.string(),
                city: Yup.string().required(),
                state: Yup.string().required(),
                zipcode: Yup.string().required(),
            }),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const { id } = req.params;

        const {
            name,
            address: { street, number, complement, city, state, zipcode },
        } = req.body;

        const recipient = await Recipient.findByPk(id);

        await recipient.update({
            name,
            street,
            number,
            complement,
            city,
            state,
            zipcode,
        });

        return res.json(recipient);
    }

    async delete(req, res) {
        const { id } = req.params;

        const recipient = await Recipient.findByPk(id);

        if (!recipient) {
            return res.status(400).json({ error: 'Receiver does not exists' });
        }

        await recipient.destroy(id);

        return res.json(recipient);
    }
}

export default new RecipientController();
