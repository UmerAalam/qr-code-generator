import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import faviconUrl from "../images/qr-code-icon.webp";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "QR Code Generator - Free Online QR Code Creator",
      },
      {
        name: "description",
        content:
          "Fast and easy-to-use QR Code Generator. Create custom QR codes instantly for URLs, text, contact info, WiFi, and more. Free online tool with instant download.",
      },
      {
        name: "keywords",
        content:
          "QR code generator, create QR code, QR code maker, free QR code, online QR code creator",
      },
      {
        name: "author",
        content: "QR Code Generator",
      },
      {
        property: "og:title",
        content: "QR Code Generator - Free Online QR Code Creator",
      },
      {
        property: "og:description",
        content:
          "Fast and easy-to-use QR Code Generator. Create custom QR codes instantly for URLs, text, contact info, WiFi, and more.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "QR Code Generator - Free Online QR Code Creator",
      },
      {
        name: "twitter:description",
        content:
          "Fast and easy-to-use QR Code Generator. Create custom QR codes instantly.",
      },
      {
        name: "theme-color",
        content: "#f5e6d3",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: faviconUrl,
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        href: faviconUrl,
      },
      {
        rel: "canonical",
        href: "https://qr-code-generator.example.com",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
