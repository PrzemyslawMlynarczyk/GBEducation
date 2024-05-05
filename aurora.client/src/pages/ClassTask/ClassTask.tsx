import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./ClassTask.module.css";

import { Button, Group, Paper, Text, ScrollArea } from '@mantine/core';

export default function ClassTask() {
    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <HeaderMenu/>
            </div>
            <div className={classes.breadcrum}>
                <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="xs">Moja klasa</Button>
                <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="xs">Zadania</Button>
                <Button mx="10px" variant="filled" color="rgba(0, 0, 0, 1)" radius="xl" size="xs">Akceptacje</Button>
            </div>
            <div className={classes.left}>
                <Group justify="center">
                    <Paper shadow="xl" radius="md" withBorder p="xl">
                    <div className={classes.buttonContainer}>
                        <Button compact>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0"/>
                                <path d="M5 12l4 4"/>
                                <path d="M5 12l4 -4"/>
                            </svg>
                            Powrót
                        </Button>
                        <Text size="xl" td="underline">
                            Wybierz klasę:
                        </Text>
                        <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl"
                                mt="md">Klasa: 1A</Button>
                        <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl"
                                mt="md">Klasa: 1B</Button>
                        <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl"
                                mt="md">Klasa: 2A</Button>
                        <Button justify="space-between" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl"
                                mt="md">Klasa: 2B</Button>
                    </div>
                    </Paper>
                </Group>
            </div>
            <div className={classes.right}>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                    <ScrollArea h={375} w={500}>
                        <Text size="xl" td="underline"> Wybierz przedmiot do którego chcesz wstawić zadanie! GBS</Text>
                        <div className={classes.gap}>
                            <Button size="xl" radius="xl" justify="space-between" variant="default">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-math"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 5h-7l-4 14l-3 -6h-2" /><path d="M14 13l6 6" /><path d="M14 19l6 -6" /></svg>
                                Matematyka
                            </Button>
                            <Button size="xl" radius="xl" justify="space-between" variant="default" mt="md">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-analytics"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M7 20l10 0" /><path d="M9 16l0 4" /><path d="M15 16l0 4" /><path d="M8 12l3 -3l2 2l3 -3" /></svg>
                                Fizyka
                            </Button>
                            <Button size="xl" radius="xl" justify="space-between" variant="default" mt="md">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-flask-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.1 15h11.8" /><path d="M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4z" /><path d="M9 3h6" /></svg>
                                Chemia
                            </Button>
                            <Button size="xl" radius="xl" justify="space-between" variant="default" mt="md">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dna-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2 .008 -.014c-3.328 1.99 -5 4.662 -5.008 8.014v1" /><path d="M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2 .008 .014c-3.328 -1.991 -5 -4.662 -5.008 -8.014v-1" /><path d="M7 4h10" /><path d="M7 20h10" /><path d="M8 8h8" /><path d="M8 16h8" /></svg>
                                Biologia
                            </Button>
                            <Button size="xl" radius="xl" justify="space-between" variant="default" mt="md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 19l18 0"/>
                                    <path
                                        d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/>
                                </svg>
                                Informatyka
                            </Button>
                        </div>
                    </ScrollArea>
                </Paper>
            </div>
        </div>
    );
}
