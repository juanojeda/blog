import Link from "next/link";
import { forwardRef } from "react";

export const NextLink = forwardRef<HTMLAnchorElement, Omit<React.ComponentProps<typeof Link>, 'ref'>>(function LinkBehaviour(props, ref) {
  return <Link ref={ref} {...props} />;
});
