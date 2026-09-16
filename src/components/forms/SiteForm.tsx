import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

type Field = {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  multiline?: boolean;
};

type SiteFormProps = {
  fields: readonly Field[];
  submitLabel: string;
  successMessage: string;
  endpoint: string;
};

export default function SiteForm({
  fields,
  submitLabel,
  successMessage,
  endpoint,
}: SiteFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2.5}>
        {fields.map((field) => (
          <Grid
            key={field.name}
            size={{ xs: 12, md: field.multiline ? 12 : 6 }}
          >
            <TextField
              name={field.name}
              label={field.label}
              required={field.required}
              type={field.type ?? "text"}
              multiline={field.multiline}
              minRows={field.multiline ? 5 : undefined}
              value={values[field.name] ?? ""}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  [field.name]: event.target.value,
                }))
              }
            />
          </Grid>
        ))}
        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" size="large">
            {submitLabel}
          </Button>
        </Grid>
      </Grid>
      {status === "success" ? (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      ) : null}
      {status === "error" ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          Something went wrong. Please try again.
        </Alert>
      ) : null}
    </Box>
  );
}
