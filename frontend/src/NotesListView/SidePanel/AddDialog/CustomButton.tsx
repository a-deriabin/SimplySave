import React from 'react';
import Stack from "../../../shared/components/Stack";
import Container from "../../../shared/components/Container";
import styles from './styles.module.scss';
import {IconType} from "react-icons";

type PropsType = {
    onClick?: () => void,
    icon: IconType,
    text: string,
}

function CustomButton(props: PropsType) {
    return (
        <Stack direction='column' className={styles.button} onClick={props.onClick}>
            <Container>
                <props.icon className={styles.icon} />
            </Container>
            <Container>
                {props.text}
            </Container>
        </Stack>
    );
}

export default CustomButton;