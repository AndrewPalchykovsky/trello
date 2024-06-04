import styles from "@styles/HomePage.module.css"
import Card from "@components/Card"
import React from "react";

export default function HomePage() {
    return (
        <section className={styles.homepage}>
            <Card />
        </section>
    )
}
