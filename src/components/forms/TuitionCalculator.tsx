import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { tuitionMatrix } from "@/data/site";
import SiteLink from "@/components/common/SiteLink";

const grades = ["K-5th", "6th-8th", "9th-12th"];
const incomes = ["$49,000 or below", "$50,000-$69,000", "$70,000-$89,000", "$90,000 and above"];

export default function TuitionCalculator() {
  const [grade, setGrade] = useState("");
  const [income, setIncome] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    if (!grade || !income) return "";
    return tuitionMatrix[grade]?.[income] || "";
  }, [grade, income]);

  return (
    <Box
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
      <Typography variant="h3" sx={{ mb: 2 }}>
        Tuition Calculator for US Students
      </Typography>
      <FormLabel required>Select the grade your child will be entering</FormLabel>
      <RadioGroup value={grade} onChange={(e) => setGrade(e.target.value)} sx={{ mb: 2 }}>
        {grades.map((g) => (
          <FormControlLabel key={g} value={g} control={<Radio />} label={g} />
        ))}
      </RadioGroup>
      <FormLabel required>Select annual household income</FormLabel>
      <RadioGroup value={income} onChange={(e) => setIncome(e.target.value)} sx={{ mb: 2 }}>
        {incomes.map((g) => (
          <FormControlLabel key={g} value={g} control={<Radio />} label={g} />
        ))}
      </RadioGroup>
      <Button variant="contained" onClick={() => setSubmitted(true)} disabled={!grade || !income}>
        Submit
      </Button>
      {submitted && estimate ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            {estimate}
          </Typography>
        </Alert>
      ) : null}
      <Typography variant="body1" sx={{ mt: 3 }}>
        The tuition amount shown is an estimate. Final tuition is determined through our financial review process, which considers each family’s overall financial situation.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        All families complete this process through{" "}
        <SiteLink href="https://online.factsmgt.com/signin/4J766">FACTS</SiteLink>. Contact the admissions office at 1 877-303-3039 with any questions.
      </Typography>
    </Box>
  );
}
