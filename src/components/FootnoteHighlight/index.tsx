import React from "react";
import theme from "@/app/theme";
import { alpha, Box } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const FootnoteHighlight = ({ children }: { children: React.ReactNode }) => {
  const routerPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = hash;
      }, 0);
    }
  }, [router, routerPath, searchParams]);

  return (
    <Box
      sx={{
        "& [id^=user-content-fn-]:target": {
          background: alpha(theme.palette.secondary.light, 0.25),
          borderCollapse: "collapse",
          "& p": {
            mb: 0,
          },
          "&::after": {
            content: "''",
            display: "block",
            height: theme.spacing(0.25),
            background: theme.palette.secondary.main,
            mb: 2,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};
