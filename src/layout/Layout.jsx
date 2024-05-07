/* eslint-disable react/prop-types */
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <p>
            <a href="#">BotoStart</a> |react course
        </p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Fateme</p>
    </footer>
    
    </>
  )
}

export default Layout