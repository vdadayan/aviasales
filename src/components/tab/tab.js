import React from "react";
import content from '../content/content.module.css';
import classNames from 'classnames';


export const Tab = ({text, active}) => {
    return(
        <div className={classNames(content.tab, {[content.tabActive]: active})}>
            <span>
                {text}
            </span>
        </div>
    )
}