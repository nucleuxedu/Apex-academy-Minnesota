import LoginDialog from "@/components/auth/LoginDialog";
import PageHero from "@/components/layout/PageHero";
import { FILE_SHARE } from "@/data/site";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function FileSharePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoggedIn(window.localStorage.getItem("mpa-logged-in") === "true");
  }, []);

  const files: { name: string; type: string; updated: string }[] = [];

  return (
    <>
      <Head>
        <title>{FILE_SHARE.title}</title>
      </Head>
      <PageHero title={FILE_SHARE.heading} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <FolderOpenIcon color="primary" />
              <Typography variant="h5">Academy Files</Typography>
            </Box>
            <Typography sx={{ mb: 3, maxWidth: 720 }}>
              Access shared academy files after logging in.
            </Typography>

            {!loggedIn ? (
              <Box
                sx={{
                  border: "1px dashed",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography sx={{ mb: 2 }}>{FILE_SHARE.empty}</Typography>
                <Button variant="contained" onClick={() => setLoginOpen(true)}>
                  Log In
                </Button>
              </Box>
            ) : (
              <>
                <TextField
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search files"
                  sx={{ mb: 2, maxWidth: 420 }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Updated</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {files.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3}>
                          {query
                            ? `No files match “${query}”.`
                            : "No files have been shared yet."}
                        </TableCell>
                      </TableRow>
                    ) : (
                      files.map((file) => (
                        <TableRow key={file.name} hover>
                          <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <InsertDriveFileIcon fontSize="small" color="action" />
                              {file.name}
                            </Box>
                          </TableCell>
                          <TableCell>{file.type}</TableCell>
                          <TableCell>{file.updated}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </>
            )}
          </CardContent>
        </Card>
      </Container>
      <LoginDialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSuccess={() => setLoggedIn(true)}
      />
    </>
  );
}
