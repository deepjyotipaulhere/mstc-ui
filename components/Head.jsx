import React from "react";
import Head from "next/head";

export default function NHead(props) {
  return <>
    <Head>
        <title>{props.title || "MSTC Application"}</title>
        <link rel='icon' href="/icon.png" />
    </Head>
  </>;
}
