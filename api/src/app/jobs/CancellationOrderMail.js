import Mail from '../../lib/Mail';

class CancellationOrderMail {
    get key() {
        return 'CancellationOrderMail';
    }

    async handle({ data }) {
        const { email, name, product } = data;

        await Mail.sendMail({
            to: `${name} <${email}>`,
            subject: 'Cancelamento da entrega',
            template: 'cancellationorder',
            context: {
                email,
                name,
                product,
            },
        });
    }
}

export default new CancellationOrderMail();
