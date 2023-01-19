import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { HeaderMenu } from "@/components/containers/HeaderMenu";
import { FooterSocial } from "@/components/layout/FooterSocial";
import { FeaturesCards } from "@/components/layout/FeaturesCards";
import { HeroImageRight } from "@/components/layout/HeroImageRight";
import { HeaderMegaMenu } from "@/components/containers/HeaderMegaMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMegaMenu />
      <HeroImageRight />
      <FeaturesCards />
      <FooterSocial />
    </>
  );
}