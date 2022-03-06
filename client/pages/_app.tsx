import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors"
import type { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Head>
          <title>Stepup Quiz</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="is a tool that lets you receive email notifications about Willys Plus products from categories of your choice.`}"
          />
          <meta
            property="og:description"
            content="is a tool that lets you receive email notifications about Willys Plus products from categories of your choice.`}"
          />
          <meta property="og:image" content="https://i.imgur.com/TO3DegM.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:url"
            content="https://willys-plus-notifier.netlify.app/"
          />
          <meta content="willys, plus, notifier" name="keywords" />
        </Head>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;