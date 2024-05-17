import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Curso Next.Js </title>
      </Head>
        
      <div className={styles.description}>
        <h1> Curso NextJs </h1> 
      </div>
    </>
  );
}
