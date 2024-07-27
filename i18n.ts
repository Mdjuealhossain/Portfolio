// import { locales } from "@/global/staticData";
// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";

// export default getRequestConfig(
//   async ({ locale = "en" }: { locale: string }) => {
//     // Validate that the incoming `locale` parameter is valid
//     if (!locales.includes(locale as string)) notFound();

//     return {
//       messages: (
//         await (locale === "en"
//           ? // When using Turbopack, this will enable HMR for `en`
//             import("./messages/en.json")
//           : import(`./messages/${locale}.json`))
//       ).default,
//     };
//   }
// );

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/global/staticData";

// Can be imported from a shared config
// const locales = ["en", "de"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  console.log(locale);

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
