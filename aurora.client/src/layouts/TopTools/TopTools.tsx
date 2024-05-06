import classes from './TopTools.module.css';
import { Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";

interface TopToolsProps {
    link1: string;
    link2: string;
    link3: string;
}

export function TopTools(props: TopToolsProps) {
    const { link1, link2, link3 } = props;
    const navigate = useNavigate();

    return (
        <div className={classes.breadcrum}>
            <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="l"
                    onClick={() => navigate(link1)}>Moja klasa</Button>
            <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="l"
                    onClick={() => navigate(link2)}>Zadania</Button>
            <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="l"
                    onClick={() => navigate(link3)}>Akceptacje</Button>
        </div>
    );
}