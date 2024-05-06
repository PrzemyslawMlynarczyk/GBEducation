import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools";
import classes from "./Class.module.css";

import { Button, Group, Paper } from '@mantine/core';
export default function Class() {


    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <TopTools link1="/Class" link2="/ClassTask" link3="/Acceptance" />
            </div>
            <div className={classes.recommend}>
                
                <Group justify="center">
                    <Paper shadow="xl" radius="md" withBorder p="xl">
                <div className={classes.buttonContainer}>
                    <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl" mt="md" >Klasa: 1A   Ilość uczniów: x</Button>
                    <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl" mt="md" >Klasa: 1B   Ilość uczniów: x</Button>
                    <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl" mt="md">Klasa: 2A   Ilość uczniów: x</Button>
                    <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl" mt="md">Klasa: 2B   Ilość uczniów: x</Button>
                </div>
                    </Paper>
                </Group>
                
            </div>
            <div className={classes.footer}>
 
            </div>
        </div>
    );
}
