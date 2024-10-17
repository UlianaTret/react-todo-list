import React from "react";

import {formatDistanceToNow} from "date-fns";

const Label = ({task, date}) =>{
    return (
        <label>
            <span className='description'>{task}</span>
            <span className='created'>{`created ${formatDistanceToNow(date, Date.now())} ago`}</span>
        </label>
    )
}
export default Label;