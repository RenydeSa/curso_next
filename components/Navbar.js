import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
        <div className={styles.description}>
            <ul>
            <h2> Home </h2>
            </ul>
            <ul>
            <Link href="/products">
            <h2> Produtos </h2>
                </Link>
            </ul>
        </div>
  );
}