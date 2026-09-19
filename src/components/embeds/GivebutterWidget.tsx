import { useEffect } from "react";
import Box from "@mui/material/Box";
import { site } from "@/data/site";

export default function GivebutterWidget() {
  useEffect(() => {
    const existing = document.querySelector("script[data-givebutter]");
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=znYtW7bRQWODun2R&p=wordpress";
      script.async = true;
      script.setAttribute("data-givebutter", "true");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Box
      sx={{ my: 3 }}
      dangerouslySetInnerHTML={{ __html: `<givebutter-widget id="${site.givebutterId}"></givebutter-widget>` }}
    />
  );
}
