import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools.tsx";
import classes from "./TeacherTasks.module.css";
import { Footer } from "../../layouts/Footer/Footer";
import { Button, Group, Paper, Text, ScrollArea, Flex, Divider } from '@mantine/core';

const handleUploadFileClick = () => {
    window.location.href = "/UploadFile";
};


const handleBackSchoolSubjectClick = () => {
    window.location.href = "/ClassTask";
};

const handleTaskEvaluationClick = () => {
    window.location.href = "/TaskEvaluation";
};

export default function TeacherTasks() {
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
                            <Button compact onClick={handleBackSchoolSubjectClick}>
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
                            <Text size="xl" td="underline">
                                Twoja klasa:
                            </Text>

                        </div>
                    </Paper>
                </Group>
            </div>
            <div className={classes.right}>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                    <ScrollArea h={375} w={500}>
                        
                        <div className={classes.gapDivider}>
                            <Text size="xl" > Lekcja 1</Text>
                            <Flex justify="space-between" className={classes.gap}>
                                <Button variant="default" onClick={handleUploadFileClick}>
                                Wstaw Zadanie
                            </Button> 
                                <Button variant="default" onClick={handleTaskEvaluationClick}>
                                Oceń Zadanie
                                </Button> 
                            </Flex>
                            <Divider size="xs" className={classes.gapDivider } />
                        </div>
                        
                        <div className={classes.gapDivider}>
                            <Text size="xl" > Lekcja 2</Text>
                            <Flex justify="space-between" className={classes.gap}>
                                <Button variant="default" onClick={handleUploadFileClick}>
                                    Wstaw Zadanie
                                </Button>
                                <Button variant="default" onClick={handleTaskEvaluationClick} >
                                    Oceń Zadanie
                                </Button>
                            </Flex>
                            <Divider size="xs" className={classes.gapDivider} />
                        </div>

                        <div className={classes.gapDivider}>
                            <Text size="xl" > Lekcja 3</Text>
                            <Flex justify="space-between" className={classes.gap}>
                                <Button variant="default" onClick={handleUploadFileClick}>
                                    Wstaw Zadanie
                                </Button>
                                <Button variant="default" onClick={handleTaskEvaluationClick}>
                                    Oceń Zadanie
                                </Button>
                            </Flex>
                            <Divider size="xs" className={classes.gapDivider} />
                        </div>
                    </ScrollArea>
                </Paper>
            </div>
            <Footer /> 
        </div>
    );
}
