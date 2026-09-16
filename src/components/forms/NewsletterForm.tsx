import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

export default function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography
        variant="h6"
        sx={{ mb: 1.5, color: dark ? "common.white" : "text.primary" }}
      >
        Get Monthly Updates
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
        }}
      >
        <TextField
          required
          type="email"
          name="email"
          label="Enter your email here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          slotProps={{ htmlInput: { maxLength: 250 } }}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "background.paper",
            },
          }}
        />
        <Button type="submit" variant="contained" color="secondary">
          Sign Up!
        </Button>
      </Box>
      {status === "success" ? (
        <Alert severity="success" sx={{ mt: 2 }}>
          Thanks for submitting!
        </Alert>
      ) : null}
      {status === "error" ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          Please enter a valid email and try again.
        </Alert>
      ) : null}
    </Box>
  );
}
