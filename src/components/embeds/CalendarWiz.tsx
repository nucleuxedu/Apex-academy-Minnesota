import { useEffect } from "react";
import Box from "@mui/material/Box";

export default function CalendarWiz() {
  useEffect(() => {
    const id = "calendarwiz-script";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src =
        "https://www.calendarwiz.com/cwlist/cwresponsive.js/?crd=myveritas&view=calendar&nolog=1&skiptitle=1&cid[]=132456&calwidth=100%&calheight=1200&mobilepref=mobile";
      document.getElementById("calendarwiz-mount")?.appendChild(script);
    }
  }, []);

  return <Box id="calendarwiz-mount" sx={{ minHeight: 600, my: 2 }} />;
}
