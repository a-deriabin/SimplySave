import React from 'react';
import {IconType} from "react-icons";
import Stack from "../Stack";
import styles from "./styles.module.scss";
import Container from "../Container";
import HorizontalButton from "../HorizontalButton";
import Box from "../Box";

type PropsType = {
    text: string,
    icon: IconType | null,
    onClick?: () => void,
}

function ContextMenuButton(props: PropsType) {
    const Icon = props.icon ?? Box;

    return (
        <HorizontalButton font='small' onClick={props.onClick}>
            <Stack direction='row' justify='space-between' align='center'>
                <Icon className={styles.icon}/>
                <Container horizontalAlign='start'>
                    {props.text}
                </Container>
            </Stack>
        </HorizontalButton>
    );
}

export default ContextMenuButton;