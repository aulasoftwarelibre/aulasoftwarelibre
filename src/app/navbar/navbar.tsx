"use client";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className={styles.nav_box}>
            <div className={styles.opt_container}>
                <div className={styles.opt}><Link href="/">Inicio</Link></div>
                {/* Desplegable de El Aula */}
                <div className={`${styles.opt} ${styles.dropdown}`}>
                    <span className={styles.dropdown_title}>El Aula ▾</span>
                    <div className={styles.dropdown_content}>
                        <Link href="/us">¿Quiénes somos?</Link>
                        <Link href="/the-team">Consejo Asesor</Link>
                        <Link href="/docs">Documentos</Link>
                    </div>
                </div>
                <div className={styles.opt}><Link href="https://salmorejo.tech/" target="_blank">SalmorejoTech</Link></div>
                <div className={styles.opt}><Link href="/news">Noticias</Link></div>
                <div className={styles.opt}><Link href="/activities">Talleres</Link></div>
                <div className={styles.opt}><Link href="/podcast">Podcast</Link></div>
                <div className={styles.opt}><Link href="/employees">Empleo</Link></div>
                <div className={styles.opt}><Link href="https://ideas.aulasoftwarelibre.uco.es/idea" target="_blank">Ideas</Link></div>
                <div className={`${styles.opt} ${styles.dropdown}`}>
                    <span className={styles.dropdown_title}>Servicios ▾</span>
                    <div className={styles.dropdown_content}>
                        <Link href="/directory">Directorio</Link>
                        <Link href="/mail-list">Lista de correo</Link>
                    </div>
                </div>
                <div className={styles.opt}><Link href="/contact">Contacto</Link></div>
            </div>
        </div>
    )
}