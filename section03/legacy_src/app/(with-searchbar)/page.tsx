import styles from "./page.module.css";
import ClientComponent from "@/app/components/client-component";
import ServerComponent from "@/app/components/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      This is Index Page...
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
