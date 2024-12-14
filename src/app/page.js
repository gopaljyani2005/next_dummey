import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        This is home page
      </h1>
      <Link href="/user" >go form here</Link>
    </main>
  );
}
