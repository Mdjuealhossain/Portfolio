import { unstable_setRequestLocale } from "next-intl/server";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import AppLayout from "@/layouts/AppLayout";
import { siteConfig } from "@/global/config";
import ThemeContextProvider from "@/theme";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale });
  return {
    title: {
      default: t("Metatags.Landing.title"),
      template: `${t("Metatags.Landing.title")} - %s`,
    },
    description: t("Metatags.Landing.description"),
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    icons: {
      icon: ["/favicon.ico?v=4"],
      apple: ["/apple-touch-icon.png?v=4"],
      shortcut: ["/apple-touch-icon.png"],
    },
    openGraph: {
      type: "website",
      title: t("Metatags.Landing.title"),
      description: t("Metatags.Landing.description"),
      siteName: t("Metatags.Landing.title"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("Metatags.Landing.title"),
      description: t("Metatags.Landing.description"),
      creator: "@Jueal920977",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale?: any;
  };
}) {
  unstable_setRequestLocale(locale);
  // const messages = await getMessages();

  console.log(locale);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : ""}>
      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <AppLayout>{children}</AppLayout>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
