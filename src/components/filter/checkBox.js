import React from "react";
import styles from './styles.module.css'

export const CheckBox = (props) => {
    return (
        <div className={styles.itemsWrap}>
            <label htmlFor={props.name} className={styles.label}>
                <input className={styles.label} id={props.name} type="checkbox"/>
                <span className={styles.label}></span>
                {props.text}
            </label>
        </div>
    )
}