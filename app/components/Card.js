import styles from "@styles/Card.module.css";
import React from "react";
import {TextField} from "@mui/material";

export default function Card() {
    return (
        <div className={styles.card}>
            <h1>This is card title</h1>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}
