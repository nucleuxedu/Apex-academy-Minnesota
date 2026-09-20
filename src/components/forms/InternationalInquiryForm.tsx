import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { countries, countryCodes, grades } from "@/data/site";
import SiteLink from "@/components/common/SiteLink";

export default function InternationalInquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [values, setValues] = useState({
    parentName: "",
    studentGrade: "",
    email: "",
    country: "",
    countryCode: "+1",
    phone: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/inquiry", {
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
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        my: 3,
        p: { xs: 2.5, md: 3.5 },
        bgcolor: "background.default",
        border: "1px solid",
        borderColor: "divider",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: "secondary.main",
        },
      }}
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Request Information (International)
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Not ready to apply yet? Start here.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Get an information packet and admissions details.
      </Typography>
      <TextField
        required
        fullWidth
        margin="normal"
        label="Parent Name"
        placeholder="Enter your full name"
        value={values.parentName}
        onChange={(e) => setValues((s) => ({ ...s, parentName: e.target.value }))}
      />
      <TextField
        required
        select
        fullWidth
        margin="normal"
        label="Student Grade"
        value={values.studentGrade}
        onChange={(e) => setValues((s) => ({ ...s, studentGrade: e.target.value }))}
      >
        <MenuItem value="">—Please choose an option—</MenuItem>
        {grades.map((g) => (
          <MenuItem key={g} value={g}>
            {g}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        fullWidth
        type="email"
        margin="normal"
        label="Email"
        placeholder="your.email@example.com"
        value={values.email}
        onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
      />
      <TextField
        required
        select
        fullWidth
        margin="normal"
        label="Country"
        value={values.country}
        onChange={(e) => setValues((s) => ({ ...s, country: e.target.value }))}
      >
        <MenuItem value="">—Please choose an option—</MenuItem>
        {countries.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </TextField>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            select
            fullWidth
            margin="normal"
            label="Country code"
            value={values.countryCode}
            onChange={(e) => setValues((s) => ({ ...s, countryCode: e.target.value }))}
          >
            {countryCodes.map((c) => (
              <MenuItem key={`${c.label}-${c.code}`} value={c.code}>
                {c.flag} {c.code}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <TextField
            required
            fullWidth
            type="tel"
            margin="normal"
            label="Phone Number"
            placeholder="Enter phone number"
            value={values.phone}
            onChange={(e) => setValues((s) => ({ ...s, phone: e.target.value }))}
          />
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ my: 2 }}>
        By submitting this form, you agree to receive information about Apex Academy Minnesota. We respect your privacy. View our{" "}
        <SiteLink href="/privacy-policy">Privacy Policy</SiteLink>.
      </Typography>
      <Button type="submit" variant="contained">
        SEND ME THE DETAILS
      </Button>
      {status === "success" ? (
        <Alert sx={{ mt: 2 }} severity="success">
          Thank you. We received your request and will send details shortly.
        </Alert>
      ) : null}
      {status === "error" ? (
        <Alert sx={{ mt: 2 }} severity="error">
          Something went wrong. Please try again or call 763.670.0793.
        </Alert>
      ) : null}
    </Box>
  );
}
