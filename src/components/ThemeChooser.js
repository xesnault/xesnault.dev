import React from "react"
import { useState, useContext, useEffect } from 'react';
import {ThemeContext, themes} from "../themes/themes";

import {LanguageContext, languages} from "../lang";

import _JSXStyle from "styled-jsx/style"

export default function ThemeChooser({showBackground})
{
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <div className="ThemeChooser-wrapper">
            <div onClick={theme.toggle} className="ThemeChooser">
                <div>{theme.selected.name == "light" ? language.text.menuBar.darkTheme : language.text.menuBar.lightTheme}</div>
            </div>
            <style jsx>{`
                .ThemeChooser-wrapper
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-right: 20px;
                }

                .ThemeChooser
                {
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-radius: 8px;
                    padding: 5px;
                    font-size: 0.8rem;

                    color: ${showBackground ? theme.selected.text : "white"};

                    border: 1px solid ${showBackground ? theme.selected.text : "white"};
                }

                @media screen and (min-width: 992px)
                {
                    .ThemeChooser
                    {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </div>
    );
}