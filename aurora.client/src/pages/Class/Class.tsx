import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./Class.module.css";

import { Button, Group, Paper } from '@mantine/core';
export default function Class() {


    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="xs">Moja klasa</Button>
                <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="xs">Zadania</Button>
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
