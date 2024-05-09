import React, { useState, useEffect } from "react";
import { useToggle } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import './Auth.css';
import '@mantine/core/styles.css';
/*import { checkUserLoggedIn } from "../../features/getCookies/getCookies";
*/

export default function Auth(props) {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            terms: true,
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 4 ? 'Password should include at least 4 characters' : null),
        },
    });

    const [ShowError, setShowError] = useState(false);

    async function handleRegister() {
        console.log("Trying to register");
        let error = false;
        if (form.values.email.length < 5)
        {
            error = true;
            form.setFieldError('email', 'Adres email jest niepoprawny!');
        }
        if (form.values.password.length < 6)
        {
            error = true;
            form.setFieldError('password', 'Hasło jest za krótkie!');
        }
        if (form.values.firstName.length < 1) {
            error = true;
            form.setFieldError('firstName', 'Nie jest podane imię!');
        }
        if (form.values.lastName.length < 1) {
            error = true;
            form.setFieldError('lastName', 'Nie jest podane nazwisko!');
        }
        if(error)
        {
            console.log("Error is true");
            return;
        }

        console.log("Registering...");
        const registerUrl = "https://localhost:7287/api/AspNetUsers";
        const registerData = {
            Email: form.values.email,
            PasswordHash: form.values.password,
            name: form.values.firstName,
            surname: form.values.lastName,
           
        };
        const registerResponse = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

        if (!registerResponse.ok) {
            if (registerResponse.status === 404) {
                form.setFieldError('email', 'Email istnieje już w bazie danych!');
            }
            const errorMessage = await registerResponse.text();
            throw new Error(`HTTP error! Status: ${registerResponse.status}, Message: ${errorMessage}`);
            return;
        }
        else {
            window.location.href = "/Menu";
        }
    }

    async function handleLogin() {
        
        const url = "https://localhost:7287/login?useCookies=true&useSessionCookies=true";
        const data = {

            Email: form.values.email,
            password: form.values.password
        }

        try {
            const response = await fetch(url, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/json',
                    'Cookie': 'cookieName=cookieValue'
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {

                const errorMessage = await response.text();
                setShowError(true);
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            } else {
                setShowError(false);
                window.location.href = "/Menu";
            }

        } catch (error) {
            console.error('Error creating entity:', error);
        }
        
    }


    
    return (
        <Paper radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
                {type === 'register'
                    ? 'Zapraszamy!'
                    : "Witamy ponownie!"}
            </Text>

            <Divider labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            required
                            label="Imie"
                            placeholder="Podaj imię"
                            value={form.values.firstName}
                            onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
                            radius="md"
                        />
                    )}
                    {type === 'register' && (
                        <TextInput
                            required
                            label="Nazwisko"
                            placeholder="Podaj nazwisko"
                            value={form.values.lastName}
                            onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
                            radius="md"
                        />
                    )}
                    <TextInput
                        required
                        label="Adres email"
                        placeholder="hackaton@tu.kielce.pl"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Podany adres email istnieje już w bazie danych!'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Hasło"
                        placeholder="Twoje hasło"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Hasło powinno zawierać minimum 8 znaków'}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="Akceptuje regulamin serwisu."
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}

                    
                </Stack>
                {ShowError ? <h6><div className="gap"> Błąd logowania, sprawdź dane i wprowadź je jeszcze raz. </div></h6> : null}
                <Group justify="space-between" mt="xl">
                    
                    <Anchor component="button" type="button" c="dimmed" onClick={toggle} size="xs">
                        {type === 'register'
                            ? 'Posiadasz konto? Zaloguj się'
                            : "Nie posiadasz konta? Zarejestruj się"}
                    </Anchor>
                    
                    <Button type="submit" radius="xl" onClick={type === 'register' ? handleRegister : handleLogin}>
                        {type === 'register' ? "Rejestracja" : "Logowanie"}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}
