import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global Meta Tags and Links */}
        <meta charset="utf-8" />
        <meta name="description" content="Description of the SaaS platform." />
        <meta name="author" content="Anastasiia Berest" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="★SaaS | by Xforeal★" />
        <meta property="og:description" content="Description of the SaaS platform." />
        <meta property="og:image" content="/seo.jpg" />
        <meta property="og:image:width" content="314" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SaaS | by Xforeal" />
        <meta property="og:url" content="/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="/" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        <meta name="twitter:title" content="★SaaS | by Xforeal★" />
        <meta name="twitter:description" content="Description of the SaaS platform." />
        <meta name="twitter:image" content="/seo.jpg" />
        <meta itemprop="name" content="★SaaS | by Xforeal★" />
        <meta itemprop="description" content="Description of the SaaS platform." />
        <meta itemprop="image" content="/seo.jpg" />
        <link rel="shortcut icon" href="/fav/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/fav/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#EAEEFE" />
        <link rel="manifest" href="/fav/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#EAEEFE" />
        <meta name="theme-color" content="#EAEEFE" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
