import Image from "next/image";
import styles from "./page.module.css";
import AllEntries from "./components/entry";
import NewEntry from "./components/new-entry";

export default function Home() {
  return (
    <div>
      <div id={styles.top}>
        <h1>Recommendation List</h1>
        <h3 id={styles.desc}>
          Whenever you get something recommended to you, write it here so you
          can remember it!
        </h3>
      </div>
      <div id={styles.border}></div>
      <div id={styles.guide}>
        <div className={styles.subcontainer}>
          <h3>Title</h3>
        </div>
        <div className={styles.subcontainer}>
          <h3>Author</h3>
        </div>
        <div className={styles.subcontainer}>
          <h3>Media Type</h3>
        </div>
        <div className={styles.subcontainer}>
          <h3>Controls</h3>
        </div>
      </div>
      <AllEntries />
      <NewEntry />
    </div>
  );
}
