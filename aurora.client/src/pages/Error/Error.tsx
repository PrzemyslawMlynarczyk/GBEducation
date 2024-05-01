import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Number } from './Number';
import classes from './Error.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Error() {
    const navigate = useNavigate();
    const [remainingSeconds, setRemainingSeconds] = useState(10); // Pocz¹tkowa wartoœæ 10 sekund

    useEffect(() => {
        // Funkcja typu IIFE, uruchamiana natychmiast po renderowaniu komponentu
        (function redirect() {
            // Ustawienie timeout na 10 sekund (10000 milisekund)
            const timeoutId = setTimeout(() => {
                // Przekierowanie u¿ytkownika na podstronê /home
                navigate('/');
            }, remainingSeconds * 1000); // U¿ycie pozosta³ej liczby sekund

            // Zwrócenie funkcji czyszcz¹cej timeout, aby unikn¹æ wycieków pamiêci
            return () => clearTimeout(timeoutId);
        })();
    }, [navigate, remainingSeconds]); // Dodanie 'navigate' i 'remainingSeconds' do zale¿noœci useEffect

    // Funkcja odliczaj¹ca czas
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingSeconds(prevSeconds => prevSeconds - 1); // Zmniejszenie liczby sekund o 1 co sekundê
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
                        Strona zaginê³a, mo¿e posz³a na kawê z 418?<br />
                        Poczekaj {remainingSeconds} sekund aby automatycznie siê przenieœæ na stronê g³ówn¹.
                    </Text>
                    <Group justify="center">
                        <Button size="md" variant="outline" onClick={redirect}>Przenieœ mnie ju¿ teraz</Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}
