import Grid from "@mui/material/Unstable_Grid2";
import Head from "next/head";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>James Kivai</title>
      </Head>
      <Grid
        container
        sx={{
          height: "90vh",
        }}
      >
        <Grid
          xs={12}
          sm={6}
          sx={{
            p: "15px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontWeight={"700"} variant="h5">
              Hello, it&apos;s me
            </Typography>
            <Typography
              fontWeight={"700"}
              variant="h1"
              sx={{ marginBottom: "-10px" }}
            >
              James
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", marginTop: "-15px" }}
            >
              *0100101001100001011011010110010101110011 for robots
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "30px" }}>
              A motivated engineer with a proven track record of successfully
              executing technical projects as well as expertise in full-stack
              web design and development.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} sx={{ height: "100%" }}>
          <Box
            sx={{
              // backgroundImage: `url('/Photos/Photo2.jpg')`,
              background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Photos/Photo2.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: {
                sm: "100%",
                xs: "50%",
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
