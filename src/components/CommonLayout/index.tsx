import { Container } from '@mui/material';
import HalftoneBox from '../HalftoneBox';

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HalftoneBox sx={{
      "&::before": {
        maskImage: 'linear-gradient(to bottom, white, transparent 30%)',
      }
    }}>
      <Container sx={{ py: 5 }}>{children}</Container>
    </HalftoneBox>
  );
}

export default CommonLayout;