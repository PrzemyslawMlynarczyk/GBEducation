import React from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./Menu.module.css";
import { Text, Paper } from '@mantine/core';
import { Footer } from "../../layouts/Footer/Footer";

export default function Menu() {
    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.menuContainer}>
                <div className={classes.custom}>
                    <Paper shadow="xl" radius="md" withBorder p="xl">
                        <p><b> Skorzystaj z funkcji klasa! </b></p>
                        Czy czujesz, że nauka w grupie byłaby dla Ciebie bardziej satysfakcjonująca? Dołącz do swojej
                        klasy już dziś i odkryj świat możliwości, które otwierają się przed Tobą. Współpracuj, dziel się
                        wiedzą i wzmacniaj swoje umiejętności razem z innymi! Zapisz się do swojej klasy już teraz i
                        rozpocznij niezapomnianą przygodę z nauką!
                    </Paper>
                </div>
                <div>
                    <Paper shadow="xl" radius="md" withBorder p="xl">
                        <p><b>Masz kłopot? Zerknij do centrum pomocy! </b></p>
                        Masz z czymś problem? Zajrzyj do centrum pomocy. Znajdziesz tutaj wszystkie niezbędne informacje
                        dotyczące naszej strony!
                    </Paper>
                </div>
            </div>
            <Footer /> 
        </div>
    );
}
