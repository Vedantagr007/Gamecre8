import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className="container">
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
