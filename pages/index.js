import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Body from "../components/Body";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Body />
      </main>
    </div>
  );
}
