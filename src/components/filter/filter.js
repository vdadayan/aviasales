import React from "react";
import {CheckBox} from "./checkBox";
import styles from './styles.module.css'

export const Filter = () => {

    return (
        <div className={styles.filterWrap}>
            <div className={styles.filterTitle}>количество пересадок</div>
            <div className={styles.filterItems}>
                <CheckBox text={"Все"} name={"all"}/>
                <CheckBox text={"Без пересадок"} name={0}/>
                <CheckBox text={"1 пересадка"} name={1}/>
                <CheckBox text={"2 пересадки"} name={2}/>
                <CheckBox text={"3 пересадки"} name={3}/>
            </div>
        </div>
    )
}