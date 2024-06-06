import styles from "@styles/Card.module.css";
import React from "react";
import {TextField} from "@mui/material";

export default function Card({title, description}) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{description}</p>
            <TextField error helperText="Shouldn't be empty" id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}
