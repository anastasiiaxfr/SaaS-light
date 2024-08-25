import "@/asssets/sass/main.sass";

export const metadata = {
  title: "★SaaS | by Xforeal★", // Page title
  description: "A SaaS platform for modern businesses.", // Page description
  img: "/seo.jpg", // URL to an image for social sharing and SEO
  author: "Anastasiia Berest", // Author of the page

  // Open Graph (Facebook) metadata
  og: {
    title: "★SaaS | by Xforeal★", // Open Graph title
    description: "A SaaS platform for modern businesses.", // Open Graph description
    image: "/seo.jpg", // Open Graph image
    type: "website", // Type of content
    url: "https://yourdomain.com/", // URL of the page
    site_name: "SaaS | by Xforeal", // Name of the site
    image_width: "1200", // Width of the Open Graph image
    image_height: "630", // Height of the Open Graph image
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image", // Twitter card type
    site: "@yourTwitterHandle", // Twitter handle of the site
    creator: "@yourTwitterHandle", // Twitter handle of the creator
    title: "★SaaS | by Xforeal★", // Twitter title
    description: "A SaaS platform for modern businesses.", // Twitter description
    image: "/seo.jpg", // Twitter image
  },
  // Favicon metadata
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/icon/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/icon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/icon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/icon/site.webmanifest",
  // Theme color and tile color
  theme: {
    msapplicationTileColor: "#EAEEFE", // Microsoft Tile Color
    themeColor: "#EAEEFE", // Theme color for browsers
  },
};
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="page__wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
