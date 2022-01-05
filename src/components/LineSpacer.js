import React from "react"
import { useState, useContext } from 'react';
import {ThemeContext, themes} from "../themes/themes";

import _JSXStyle from "styled-jsx/style"

export default function LineSpacer(props)
{
    let theme = useContext(ThemeContext);
    return (
        <div className="LineSpacer">
            <div className="Line"></div>
            <style jsx>{`
                .LineSpacer {
                    width: 100%;
                    background-color: ${theme.selected.background};
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .Line
                {
                    border-top: 1px solid ${theme.selected.lineSpacer};
                    width: 25%;
                }
            `}</style>
        </div>   
    );
}