import React, { useEffect, useState } from 'react';
import { HeaderMenu } from "../../layouts/Header/HeaderMenu";
import classes from "./Class.module.css";
import { Image } from '@mantine/core';
export default function Class() {


    return (
        <div>
            <div className={classes.header}>
                <HeaderMenu />
            </div>
            <div className={classes.breadcrum}>
                <h2> Klasa </h2>
            </div>
            <div className={classes.recommend}>
                
            </div>
            <div className={classes.footer}>
 
            </div>
        </div>
    );
}
