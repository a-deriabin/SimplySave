import React from 'react';
import Stack from "../../../../shared/components/Stack";
import HorizontalButton from "../../../../shared/components/HorizontalButton";
import FolderIcon, {UserFolderIcons} from "../../../../shared/components/FolderIcon";
import Container from "../../../../shared/components/Container";

type PropsType = {
    onSubmit: (icon: string) => void,
}

function FolderIconScreen(props: PropsType) {
    const handleSelect = (icon: string) => () => props.onSubmit(icon)

    return (
        <Stack direction='column'>
            <h2>Select folder</h2>
            {UserFolderIcons.map(icon => (
                <HorizontalButton key={icon.id} onClick={handleSelect(icon.id)}>
                    <Stack direction='row' justify='space-between' align='center'>
                        <FolderIcon name={icon.id} />
                        <Container horizontalAlign='center'>
                            {icon.title}
                        </Container>
                    </Stack>
                </HorizontalButton>
            ))}
        </Stack>
    );
}

export default FolderIconScreen;
