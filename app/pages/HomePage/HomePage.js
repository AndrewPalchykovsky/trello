import styles from "./HomePage.module.css";
import Card from "./../../components/Card/Card"

export default function HomePage() {
    return (
        <section className={styles.home}>
            <Card />
        </section>
    )
}