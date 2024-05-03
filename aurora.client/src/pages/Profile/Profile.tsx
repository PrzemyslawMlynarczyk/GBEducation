import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./Profile.module.css";
import { Image } from '@mantine/core';
export default function Profile() {


    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <h2> Profil </h2>
            </div>
            <div className={classes.recommend}>

            </div>
            <div className={classes.footer}>

            </div>
        </div>
    );
}
