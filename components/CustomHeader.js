import Head from "next/head";

export default function CustomHeader({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
