import { Navbar } from "./Navbar";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            minHeight: "100%",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Container>
    </Box>
  );
}
