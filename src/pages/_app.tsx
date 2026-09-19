import type { AppProps } from "next/app";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme, { lato } from "@/theme/theme";
import Layout from "@/components/layout/Layout";
import { site } from "@/data/site";
import "@/styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{site.name}</title>
        <link rel="icon" href={site.favicon} />
        <link rel="apple-touch-icon" href={site.appleIcon} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={lato.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
