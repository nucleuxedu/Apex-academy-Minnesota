import { Fade } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function PageFade({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <Fade in key={router.asPath} timeout={450}>
      <div>{children}</div>
    </Fade>
  );
}
