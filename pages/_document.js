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
          <meta name="description" content="Web and mobile developer enthusiast." />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#3b82f6" name="theme-color" />
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
