import Image from "next/image";
import styles from "./page.module.css"
import Banner from "@/components/Banner";
import Card from "@/components/Card"
import CardPanel from "@/components/CardPanel";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        <Link href='/venue' className="flex flex-row justify-end">
            <div>Select Venue</div>
        </Link>
      </main>
    </div>
  );
}
