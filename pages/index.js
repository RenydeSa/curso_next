import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.description}>
        <h1> Home</h1> 
      </div>

      <div className={styles.container}>
        <ul>
          <li>
            <Link href="/products">
              <h2> Produtos </h2>
            </Link>

          </li>
        </ul>
      </div>
    </>
  );
}
