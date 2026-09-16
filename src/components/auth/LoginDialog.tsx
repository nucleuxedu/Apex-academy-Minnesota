import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";

type LoginDialogProps = {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export default function LoginDialog({
  open,
  onClose,
  onSuccess,
}: LoginDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mpa-logged-in", "true");
    }
    setSubmitted(true);
    onSuccess?.();
  }

  function handleClose() {
    setSubmitted(false);
    setEmail("");
    setPassword("");
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Log In</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Sign in to access member areas such as File Share.
        </Typography>
        {submitted ? (
          <Alert severity="success">You are now logged in.</Alert>
        ) : (
          <form id="login-form" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ mb: 2, mt: 1 }}
            />
            <TextField
              required
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleClose} color="inherit">
          Close
        </Button>
        {!submitted ? (
          <Button type="submit" form="login-form" variant="contained">
            Log In
          </Button>
        ) : null}
      </DialogActions>
    </Dialog>
  );
}
