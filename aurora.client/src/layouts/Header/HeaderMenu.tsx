import { Menu, Group, Center, Burger, Container,Image, em , rem, Text, Flex, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

import classes from './HeaderMenu.module.css';

const links = [
    
    { link: '/Menu', label: 'Menu' },
    { link: '/Class', label: 'Klasa' },
    { link: '/HelpDesk', label: 'Centrum Pomocy' },
    { link: '/Profile', label: 'Profil' },
    { link: '/Logout', label: 'Wyloguj się' },
];

export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    
                    <Menu.Target >
                        <a  
                            
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
                
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={() => { window.location.href = link.link; }}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div>
                   
                    <div className={classes.inner}>
                        <Flex>
                        <Image w={50}  mr={rem(30)}
                            radius="md"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                        />
                            <Title mr={rem(30)}
                            order={4}
                            >
                                
                                GBEducation
                            </Title>
                        </Flex>
                        <Group gap={5} visibleFrom="sm">
                            {items}
                        </Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                        
                    </div>
                    <Divider my="sm" variant="dashed" />
                </div>
            </Container>
        </header>
    );
}
