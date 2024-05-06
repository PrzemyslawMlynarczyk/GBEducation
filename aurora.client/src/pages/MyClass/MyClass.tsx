import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import { TopTools } from "../../layouts/TopTools/TopTools";
import classes from "./MyClass.module.css";
import { Table, TableData, Checkbox } from '@mantine/core';
import { Button, Group, Paper, Text, ScrollArea } from '@mantine/core';



const elements = [
    { Lp: 1, Imie: 'Przemysław', Nazwisko: 'C', Klasa: '1A' },
    { Lp: 2, Imie: 'Andrzej', Nazwisko: 'N', Klasa: '1A' },
    { Lp: 3, Imie: 'Witold', Nazwisko: 'Y', Klasa: '1A' },
    { Lp: 4, Imie: 'Krystian', Nazwisko: 'Ba', Klasa: '1A' },
    { Lp: 5, Imie: 'Kamil', Nazwisko: 'Ce', Klasa: '1A' },
];




export default function MyClass() {

    const rows = elements.map((element) => (
        <Table.Tr key={element.Lp}>
            <Table.Td>{element.Lp}</Table.Td>
            <Table.Td>{element.Imie}</Table.Td>
            <Table.Td>{element.Nazwisko}</Table.Td>
            
            <Table.Td>{element.Klasa}</Table.Td>
        </Table.Tr>
    ));
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
                        <Text size="xl" td="underline"> Lista uczniów w klasie:</Text>
                        <div className={classes.gap}>
                            <Table >
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th>Lp</Table.Th>
                                        <Table.Th>Imie</Table.Th>
                                        <Table.Th>Nazwisko</Table.Th>
                                        <Table.Th>Klasa</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>{rows}</Table.Tbody>
                                
                            </Table>
                        </div>
                    </ScrollArea>
                </Paper>
            </div>
        </div>
    );
}
