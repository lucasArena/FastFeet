import Mail from '../../lib/Mail';

class CreateOrderMail {
    get key() {
        return 'CreateOrderMail';
    }

    async handle({ data }) {
        const { deliveryguy, product } = data;

        await Mail.sendMail({
            to: `${deliveryguy.name}  <${deliveryguy.email}>`,
            subject: 'Nova retirada',
            template: 'createorder',
            context: {
                name: deliveryguy.name,
                product,
            },
        });
    }
}

export default new CreateOrderMail();
