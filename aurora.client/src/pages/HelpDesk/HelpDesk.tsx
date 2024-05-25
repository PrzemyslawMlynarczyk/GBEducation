import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./HelpDesk.module.css";
import { Text, Paper } from '@mantine/core';
import { Footer } from "../../layouts/Footer/Footer";

export default function HelpDesk() {


    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <h2> Centrum pomocy </h2>
            </div>
            <div className={classes.recommend}>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                <h3>Witaj w Centrum Pomocy! Jesteśmy Twoim niezawodnym punktem kontaktowym w przypadku wszelkich pytań,
                    problemów lub potrzeb pomocy dotyczących naszej platformy.</h3>
                <h4> - W zakładce “Klasa” znajdują się zadania które uczeń ma do rozwiązania.</h4>
                <h4> - W zakładce “Klasa” znajdują się informacje na temat ocen, oraz uczniów.</h4>
                <h4> - W zakładce “Menu” znajdują się podstawowe informacje o aplikacji.</h4>
                <h4> - W zakładce “Profil” znajdują się podstawowe informacje o użytkowniku.</h4>
                <h4> - W zakładce “Profil” jest możliwość zmiany hasła.</h4>
                </Paper>

            </div>
            
            <div className={classes.footer}>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                <h4> Kontakt telefoniczny </h4>
                <h4>+48 890 321 727</h4>
                </Paper>
            </div>
            <Footer /> 
        </div>
    );
}
