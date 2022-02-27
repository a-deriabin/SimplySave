import React from 'react';

type PropsType = {
    content: string,
}

function ViewScreen(props: PropsType) {
    return (
        <div>{props.content}</div>
    );
}

export default ViewScreen;