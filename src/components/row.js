import React from "react";
import content from './content/content.module.css'

export const Row = ({item}) => {
    console.log(item)
    const hours = item.duration / 60;
    const mins = (item.duration - hours) / 60;
    return (
        <div className={content.row}>
            <div className={content.cellRow}>
                <div className={content.cellRowHead}>{item.origin + "-" + item.destination}</div>
                <div className={content.cellRowHead}>{"в пути"}</div>
                <div className={content.cellRowHead}>{item.stops.length + " пересадки"}</div>
            </div>
            <div className={content.cellRow}>
                <div className={content.cellRowBottom}>{item.date.substring(11,16)}</div>
                <div className={content.cellRowBottom}>{hours+"ч" + " " +  mins+"м"}</div>
                <div className={content.cellRowBottom}>{item.stops?.map(stop => stop + " ")}</div>
            </div>
        </div>
    )
}п