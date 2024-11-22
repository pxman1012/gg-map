import dynamic from "next/dynamic";
import Head from "next/head";

const OpenStreetMap = dynamic(() => import("../components/OpenStreetMap"), {
  ssr: false, // Tắt server-side rendering
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>OpenStreetMap with Next.js</title>
      </Head>
      <h1>OpenStreetMap Integration</h1>
      <OpenStreetMap />
    </div>
  );
}
