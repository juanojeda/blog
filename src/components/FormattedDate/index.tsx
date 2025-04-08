import { formatRelative } from "date-fns";
import { enAU } from 'date-fns/locale';
import Typography from "@mui/material/Typography";

const formatDate = (date: string) => {
  const dateObj = new Date(date);

  const formatter = {
    lastWeek: "'last' eeee 'at some point'",
    yesterday: "'yesterday at some time'",
    today: "'today, fresh off the press'",
    tomorrow: "'tomorrow somehow?'",
    nextWeek: "'next' eeee 'magically?'",
    other: 'dd MMM yyyy',
  };

  return formatRelative(dateObj, new Date(), {
    locale: {
      ...enAU,
      formatRelative: (token) => formatter[token]
    }
  })
}

type FormattedDateProps = {
  date: string;
}

const FormattedDate: React.FunctionComponent<FormattedDateProps> = ({ date }) => {
  return <Typography variant="body2" color="text.secondary" component={"p"} marginBottom={1}>posted {formatDate(date)}</Typography>
}

export default FormattedDate;