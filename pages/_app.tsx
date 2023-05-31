import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "monospace",
        },
      },
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
