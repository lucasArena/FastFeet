import { parseISO, format } from 'date-fns';

export default date => {
  return date ? format(parseISO(date), 'dd/MM/yyyy') : '-';
};
