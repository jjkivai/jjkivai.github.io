import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component={"span"}
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JAMES KIVAI
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Profile Picture" src="/ProfilePicture.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
