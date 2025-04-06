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

type FormattedDateProps = typeof Typography & {
  date: string;
}

const FormattedDate = ({ date, ...props }: FormattedDateProps) => {
  return <Typography variant="caption" color="text.secondary" marginBottom={1} {...props}>posted {formatDate(date)}</Typography>
}

export default FormattedDate;