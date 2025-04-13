import { Container } from "@mui/material";
import HalftoneBox from "../HalftoneBox";

const CommonLayout: React.FC<{ children: React.ReactNode; fade?: string }> = ({
  children,
  fade = "30%",
}) => {
  return (
    <HalftoneBox fade={fade}>
      <Container sx={{ py: 5 }}>{children}</Container>
    </HalftoneBox>
  );
};

export default CommonLayout;
