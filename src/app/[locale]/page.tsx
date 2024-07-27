import React from "react";
import { getTranslations } from "next-intl/server";

import Paralux from "@/widgets/Paralux";
import HeroBanner from "@/widgets/HeroBanner";

export default async function Home({ params: { locale } }: any) {
  const t = await getTranslations({ locale });
  const name = t("Metatags.Landing.name");
  const dev = t("Metatags.Landing.dev");
  const des = t("Metatags.Landing.des");
  const free = t("Metatags.Landing.free");
 
  
  return (
    <>
      <Paralux particles={100} />
      <HeroBanner name={name} dev={dev} des={des} free={free} />
    </>
  );
}
