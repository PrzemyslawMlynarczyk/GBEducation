import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Number } from './Number';
import classes from './Error.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Error() {
    const navigate = useNavigate();
    const [remainingSeconds, setRemainingSeconds] = useState(10); // Pocz�tkowa warto�� 10 sekund

    useEffect(() => {
        // Funkcja typu IIFE, uruchamiana natychmiast po renderowaniu komponentu
        (function redirect() {
            // Ustawienie timeout na 10 sekund (10000 milisekund)
            const timeoutId = setTimeout(() => {
                // Przekierowanie u�ytkownika na podstron� /home
                navigate('/');
            }, remainingSeconds * 1000); // U�ycie pozosta�ej liczby sekund

            // Zwr�cenie funkcji czyszcz�cej timeout, aby unikn�� wyciek�w pami�ci
            return () => clearTimeout(timeoutId);
        })();
    }, [navigate, remainingSeconds]); // Dodanie 'navigate' i 'remainingSeconds' do zale�no�ci useEffect

    // Funkcja odliczaj�ca czas
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingSeconds(prevSeconds => prevSeconds - 1); // Zmniejszenie liczby sekund o 1 co sekund�
        }, 1000);

        // Czyszczenie intervalu po odmontowaniu komponentu
        return () => clearInterval(intervalId);
    }, []);

    function redirect() {
        window.location.href = "/";
    }
    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <Number className={classes.image} />
                <div className={classes.content}>
                    <Title className={classes.title}>O nie!</Title>
                    <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                        Strona zagin�a, mo�e posz�a na kaw� z 418?<br />
                        Poczekaj {remainingSeconds} sekund aby automatycznie si� przenie�� na stron� g��wn�.
                    </Text>
                    <Group justify="center">
                        <Button size="md" variant="outline" onClick={redirect}>Przenie� mnie ju� teraz</Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}
