import React from "react";
import styles from './styles.module.css';

export const CheckBox = (props) => {

    const filterClick = (e) => {
        try {
            console.log(e.target.control.id)
        }
        catch (error) {
        }
    }
    return (
        <div className={styles.itemsWrap}>
            <label htmlFor={props.name} className={styles.label} onClick={(e) => filterClick(e)}>
                <input className={styles.label} id={props.name} type="checkbox"/>
                <span className={styles.label}></span>
                {props.text}
            </label>
        </div>
    )
}