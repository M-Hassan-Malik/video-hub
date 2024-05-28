import styles from "./page.module.css";
import UploadForm from "@/app/components/upload-form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <h1>Upload Video</h1>
      <UploadForm />
    </div>
    </main>
  );
}
