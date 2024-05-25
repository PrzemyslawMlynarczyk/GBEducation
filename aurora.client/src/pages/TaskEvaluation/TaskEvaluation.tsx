import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools.tsx";
import classes from "./TaskEvaluation.module.css";
import { Footer } from "../../layouts/Footer/Footer";
import { Button, Group, Paper, Text, ScrollArea, Flex, Divider, FileInput, Textarea } from '@mantine/core';



export default function TaskEvaluation() {
    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <TopTools link1="/Class" link2="/ClassTask" link3="/Acceptance" />
            </div>
            <div className={classes.right}>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                    <ScrollArea h={375} w={500}>

                        <Button compact >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M5 12l4 4" />
                                <path d="M5 12l4 -4" />
                            </svg>
                            Powrot
                        </Button>
                        <div>
                            <Text size="xl">Ocena z zadania: x</Text>
                        </div>
                    </ScrollArea>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
