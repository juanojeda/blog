import { formatRelative } from "date-fns";
import { enAU } from 'date-fns/locale';
import Typography from "@mui/material/Typography";
import { SxProps, TypographyProps } from "@mui/system";
import { Theme } from "@mui/material";

const formatDate = (date: string) => {
  const dateObj = new Date(date);

  const formatter = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday 'at' p",
    today: "'today 'at' p",
    tomorrow: "'tomorrow 'at' p",
    nextWeek: "'next' eeee 'at' p",
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