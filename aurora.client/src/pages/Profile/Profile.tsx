import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./Profile.module.css";
import { Group, Text, rem, Paper, Modal, Button, PasswordInput, Stack} from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/dropzone/styles.css';


export default function Profile(props: Partial<DropzoneProps>) {
    const [opened, { open, close }] = useDisclosure(false);
    const [visible, { toggle }] = useDisclosure(false);
    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <h2> Profil </h2>
            </div>
            <div className={classes.recommend}>
                <Paper shadow="xl" p="xl">
                    <Text ta="center" size="xl"> Ustaw avatar!</Text>
                    <Dropzone
                        onDrop={(files) => console.log('accepted files', files)}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={5 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                        {...props}
                    >
                        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                            <Dropzone.Accept>
                                <IconUpload
                                    style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                    stroke={1.5}
                                />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <IconX
                                    style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                    stroke={1.5}
                                />
                            </Dropzone.Reject>
                            <Dropzone.Idle>
                                <IconPhoto
                                    style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                                    stroke={1.5}
                                />
                            </Dropzone.Idle>

                            <div>
                                <Text size="xl" inline>
                                    Drag images here or click to select files
                                </Text>
                                <Text size="sm" c="dimmed" inline mt={7}>
                                    Attach as many files as you like, each file should not exceed 5mb
                                </Text>
                            </div>
                        </Group>
                    </Dropzone>
                    <Modal
                        title="Zmiana hasła"
                        
                        opened={opened}
                        onClose={() => close()}
                        style={{ position: 'fixed', top: '50%', left: '0%', zIndex: 999}}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <Stack>
                                <PasswordInput
                                    label="Password"
                                    visible={visible}
                                    onVisibilityChange={toggle}
                                />
                                <PasswordInput
                                    label="Confirm password"
                                    visible={visible}
                                    onVisibilityChange={toggle}
                                />
                            </Stack>
                            
                                <Button className={classes.gap}>
                                    Wprowadź zmiany
                                </Button>
                            
                        </div>
                    </Modal>
                    <div className={classes.gap}>
                        <Button onClick={open}>Zmień hasło</Button>
                    </div>
                </Paper>
            </div>
            <div className={classes.footer}>
                
            </div>
        </div>
    );
}
