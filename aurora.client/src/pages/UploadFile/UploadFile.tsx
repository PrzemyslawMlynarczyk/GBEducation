import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools.tsx";
import classes from "./UploadFile.module.css";

import { Button, Group, Paper, Text, ScrollArea, Flex, Divider, FileInput, Textarea } from '@mantine/core';

export default function UploadFile() {
    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <TopTools link1="/Class" link2="/ClassTask" link3="/Acceptance" />
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
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M5 12l4 4" />
                                    <path d="M5 12l4 -4" />
                                </svg>
                                Powrót
                            </Button>
                            <Button justify="center" variant="filled" color="rgba(0, 0, 0, 1)" size="xl" radius="xl"
                                    mt="md">Edytuj plik</Button>
                            <Textarea
                                className={classes.gap}
                                placeholder="Wpisz tutaj!"
                                label="Dodaj komentarz!"
                                autosize
                                minRows={2}
                            />
                            <Button variant="default" justify="space-between" className={classes.gap}>
                                Zapisz komentarz
                            </Button>
                        </div>
                    </Paper>
                </Group>
            </div>
            <div className={classes.right}>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                    <ScrollArea h={375} w={500}>

                        <div className={classes.gapDivider}>
                            <Text size="xl" > Lekcja 1</Text>
                            
                                <FileInput
                                    size="xl"
                                    label="Wstaw zadanie"
                                    placeholder="O tutaj!"
                                />
                            
                            <Button variant="default" justify="space-between" className={classes.gap}>
                                Wyślij
                            </Button>
                        </div>

                    </ScrollArea>
                </Paper>
            </div>
        </div>
    );
}
