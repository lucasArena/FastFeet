export default function(start_date, end_date, canceled_at) {
  if (end_date) return 'Entregue';
  if (!start_date) return 'Pendente';
  if (start_date) return 'Retirada';
  if (!canceled_at) return 'Cancelado';

  return '';
}
