import { Container } from '@mui/material';
import HalftoneBox from '../HalftoneBox';

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HalftoneBox fade="30%">
      <Container sx={{ py: 5 }}>{children}</Container>
    </HalftoneBox >
  );
}

export default CommonLayout;