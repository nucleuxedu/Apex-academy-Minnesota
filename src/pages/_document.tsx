import { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from "next/document";
import { DocumentHeadTags, documentGetInitialProps, DocumentHeadTagsProps } from "@mui/material-nextjs/v15-pagesRouter";
import { site } from "@/data/site";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="icon" href={site.favicon} sizes="32x32" />
        <link rel="apple-touch-icon" href={site.appleIcon} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  return documentGetInitialProps(ctx);
};
