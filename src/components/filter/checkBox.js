import React from "react";
import styles from './styles.module.css'

export const CheckBox = () => {
    return (
        <div>
            <label htmlFor="name" className={styles.label}>
                <input className={styles.label} id="name" type="checkbox"/>
                <span className={styles.label}></span>
                sss
            </label>
        </div>
    )
}