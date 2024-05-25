import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools";
import classes from "./Class.module.css";
import { Footer } from "../../layouts/Footer/Footer";
import { Button, Group, Paper } from '@mantine/core';

export default function Class() {
    // Przypisanie ID klas na sztywno
    const [classData, setClassData] = useState({
        '1A': { id: '3fa85f64-5717-4562-b3fc-2c963f66afa1', count: 0 },
        '1B': { id: '3fa85f64-5717-4562-b3fc-2c963f66afa2', count: 0 },
        '2A': { id: '3fa85f64-5717-4562-b3fc-2c963f66afa3', count: 0 },
        '2B': { id: '3fa85f64-5717-4562-b3fc-2c963f66afa4', count: 0 },
    });

    useEffect(() => {
        const fetchClassData = async () => {
            try {
                const classIds = Object.keys(classData);

                const requests = classIds.map(async className => {
                    const classId = classData[className].id;
                    const response = await fetch(`https://localhost:7287/api/AspNetUsers/${classId}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const count = await response.json();
                    return { className, count };
                });

                const results = await Promise.all(requests);
                const newClassData = { ...classData };
                results.forEach(result => {
                    newClassData[result.className].count = result.count;
                });

                setClassData(newClassData);
            } catch (error) {
                console.error("Error fetching class data", error);
            }
        };

        fetchClassData();
    }, []);

    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <TopTools link1="/MyClass" link2="/ClassTask" link3="/Acceptance" />
            </div>
            <div className={classes.recommend}>
                <Group justify="center">
                    <Paper shadow="xl" radius="md" withBorder p="xl">
                        <div className={classes.buttonContainer}>
                            {Object.keys(classData).map(className => (
                                <Button
                                    key={className}
                                    justify="space-between"
                                    variant="filled"
                                    color="rgba(0, 0, 0, 1)"
                                    size="xl"
                                    radius="xl"
                                    mt="md"
                                >
                                    Klasa: {className}   Ilość uczniów: {classData[className].count}
                                </Button>
                            ))}
                        </div>
                    </Paper>
                </Group>
            </div>
            <div className={classes.footer}>
            </div>
            <Footer />
        </div>
    );
}
