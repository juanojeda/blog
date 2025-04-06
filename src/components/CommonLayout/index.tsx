import { Container } from '@mui/material';

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container sx={{ py: 5 }}>{children}</Container>
  );
}

export default CommonLayout;