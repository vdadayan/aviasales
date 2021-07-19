import React from "react";
import content from './content.module.css'
import {Tab} from "../tab/tab";
import {Ticket} from "../ticket/ticket";
import {useSelector} from "react-redux";

export const Content = () => {
    const tickets = useSelector(state => state.tickets.tickets.slice(1, 10));

    return (
        <div className={content.contentWrapper}>
            <div className={content.tabsWrapper}>
                <Tab text={"самый дешевый"} active={true}/>
                <Tab text={"самый быстрый"}/>
                <Tab text={"оптимальный"}/>
            </div>
            <div className={content.tickets}>
                {tickets?.map((item, i) => {
                    return (
                        <Ticket key={i} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}