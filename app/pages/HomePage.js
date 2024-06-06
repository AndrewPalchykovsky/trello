import styles from "@styles/HomePage.module.css"
import Card from "@components/Card"
import React from "react";

export default function HomePage() {
    const cards = [
        {title: 'Card title', description: 'Card Description'},
    ]

    const cardList = cards.map((card, index) => (
        <Card title={card.title} description={card.description} />
    ));
    return (
        <section className={styles.homepage}>
            <p>qwe</p>
            {cardList}

        </section>
    )
}
