import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

type Field =
  | { kind: "text" | "email" | "tel"; name: string; label: string; required?: boolean; placeholder?: string }
  | { kind: "select"; name: string; label: string; required?: boolean; options: string[] }
  | { kind: "checkboxes"; name: string; label: string; options: string[] };

type Props = {
  title?: string;
  endpoint: string;
  fields: Field[];
  submitLabel?: string;
};

export default function SiteForm({ title, endpoint, fields, submitLabel = "Submit" }: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [values, setValues] = useState<Record<string, string | string[]>>({});

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ my: 3, p: 3, bgcolor: "#f6f6f6", borderRadius: 2 }}>
      {title ? (
        <Typography variant="h3" sx={{ mb: 2 }}>
          {title}
        </Typography>
      ) : null}
      {fields.map((field) => {
        if (field.kind === "checkboxes") {
          const selected = (values[field.name] as string[]) || [];
          return (
            <Box key={field.name} sx={{ mb: 2 }}>
              <FormLabel>{field.label}</FormLabel>
              <FormGroup>
                {field.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={selected.includes(option)}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...selected, option]
                            : selected.filter((v) => v !== option);
                          setValues((s) => ({ ...s, [field.name]: next }));
                        }}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            </Box>
          );
        }
        return (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.kind === "select" ? undefined : field.kind}
            required={field.required}
            placeholder={field.kind !== "select" ? field.placeholder : undefined}
            select={field.kind === "select"}
            fullWidth
            margin="normal"
            value={(values[field.name] as string) || ""}
            onChange={(e) => setValues((s) => ({ ...s, [field.name]: e.target.value }))}
          >
            {field.kind === "select"
              ? field.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))
              : null}
          </TextField>
        );
      })}
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
        {submitLabel}
      </Button>
      {status === "success" ? (
        <Alert severity="success" sx={{ mt: 2 }}>
          Thank you. We received your submission and will follow up shortly.
        </Alert>
      ) : null}
      {status === "error" ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          Something went wrong. Please try again or call 763.670.0793.
        </Alert>
      ) : null}
    </Box>
  );
}
