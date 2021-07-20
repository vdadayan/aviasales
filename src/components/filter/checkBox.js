import React from "react";
import styles from './styles.module.css';
import {useDispatch} from "react-redux";
import {getTicketsFilter1} from "../../redux/reducers/ticketsReducer";

export const CheckBox = (props) => {
    const dispatch = useDispatch()

    const filterClick = (e) => {
        try {
            dispatch(getTicketsFilter1(e.target.control.id))
        } catch (error) {
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