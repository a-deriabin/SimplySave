import React from 'react';

type PropsType = {
    isVisible: boolean
}

function CreateFolderScreen(props: PropsType) {
    return !props.isVisible ? null : (
        <div>todo</div>
    );
}

export default CreateFolderScreen;