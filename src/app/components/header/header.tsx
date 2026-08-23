"use client";
import styles from "./header.module.css";

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.middle_zone}>
                <img src="logo-cuadrado_white-alpha.svg" alt="logo aula de software libre" className={styles.image}/>
            </div>
        </div>
    )
}