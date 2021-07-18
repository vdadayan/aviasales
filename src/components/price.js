import React from "react";
import content from './content/content.module.css';

export const Price = ({price}) => {
    return (
        <div className={content.price}>
            {price}
        </div>
    )
}