import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/static/favicon/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/static/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicon/site.webmanifest" rel="manifest" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#3182CE" name="theme-color" />
          <meta content="#3182CE" name="msapplication-TileColor" />
          <meta content="/static/favicon/browserconfig.xml" name="msapplication-config" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
