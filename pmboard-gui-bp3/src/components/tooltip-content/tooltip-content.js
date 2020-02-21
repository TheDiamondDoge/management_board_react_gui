import React from 'react';

export default React.memo(function TooltipContent(props) {
    const title = props.title;
    const content = props.content;
    return (
        <div>
            <h4>{title}</h4>
            <p dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
});