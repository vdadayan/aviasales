import React from "react";
import content from '../content/content.module.css';
import {Price} from "../price";
import {Row} from "../row";

export const Ticket = ({item}) => {
    return (
        <div className={content.ticket}>
            <div className={content.header}>
                <Price price={item.price}/>
                <div>ICON</div>
            </div>
            {item.segments?.map(ticket => {
                return(
                    <Row item={ticket}/>
                )
            })}
        </div>
    )
}