import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { site } from "@/data/site";
import IframeEmbed from "@/components/common/IframeEmbed";

type InquiryContextValue = {
  openInquiry: () => void;
  closeInquiry: () => void;
};

const InquiryContext = createContext<InquiryContextValue>({
  openInquiry: () => undefined,
  closeInquiry: () => undefined,
});

export function useInquiry() {
  return useContext(InquiryContext);
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      openInquiry: () => setOpen(true),
      closeInquiry: () => setOpen(false),
    }),
    [],
  );

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ pr: 6 }}>
          Start the Conversation
          <IconButton
            aria-label="Close"
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <IframeEmbed src={site.inquiryFormSrc} title="Form 3" height={720} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </InquiryContext.Provider>
  );
}
