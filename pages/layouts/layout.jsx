import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function PageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='h-full'>{children}</main>
      <Footer />
    </>
  );
}
