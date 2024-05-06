import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools.tsx";
import classes from "./EditFile.module.css";

import { Button, Group, Paper, Text, ScrollArea, Flex, Divider, FileInput, Textarea } from '@mantine/core';

export default function EditFile() {
    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <TopTools link1="/Class" link2="/ClassTask" link3="/Acceptance" />
            </div>
            <div className={classes.left}>

            </div>
            <div className={classes.right}>
                <Paper shadow="xl" radius="md" withBorder p="xl">

                    <ScrollArea h={375} w={500}>
                        <div className={classes.gapDivider}>
                            <Flex gap="sm">
                                <Button compact >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                        <path d="M5 12l4 4" />
                                        <path d="M5 12l4 -4" />
                                    </svg>
                                    Powrót
                                </Button>
                                <FileInput
                                    
                                    size="xl"
                                    label="Edytuj zadanie"
                                    placeholder="O tutaj!"
                                />
                            </Flex>
                        </div>

                        <Button variant="default" justify="space-between" className={classes.gap}>
                            Zapisz
                        </Button>

                    </ScrollArea>
                </Paper>
            </div>
        </div>
    );
}
