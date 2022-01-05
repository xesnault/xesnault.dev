import React from "react"
import {useContext} from 'react';
import {ThemeContext, themes} from "../themes/themes";
import {LanguageContext, languages} from "../lang";

import _JSXStyle from "styled-jsx/style"

export default function Contact(props)
{
    const theme = useContext(ThemeContext);
    const text = useContext(LanguageContext).text;

    let linkedinImage = require("../images/linkedin.png");
    let githubImage = require("../images/github.png");
    let twitterImage = require("../images/twitter.png");

    return (
        <div id="contact">
            <h2>{text.contact.headline}</h2>
            <p>contact@xesnault.dev</p>
            <div className="contact-social">
                <a href="https://www.linkedin.com/in/xavier-esnault/" target="_blank" rel="noopener noreferrer"><img src={linkedinImage} title="Linkedin" alt="linkedin"/></a>
                <a href="https://github.com/xesnault" target="_blank" rel="noopener noreferrer"><img src={githubImage} title="Github" alt="github"/></a>
                <a href="https://twitter.com/xesnault_" target="_blank" rel="noopener noreferrer"><img src={twitterImage} title="Twitter" alt="twitter"/></a>
            </div>
            <style jsx>{`
                #contact
                {
                    background-color: ${themes.dark.background};
                    text-align: center;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }

                h2
                {
                    color: ${theme.selected.mainColor}
                }

                .contact-social
                {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin-top: 20px;
                }
                
                .contact-social img
                {
                    width: 50px;
                    height: 50px;
                    margin-left: 10px;
                    margin-right: 10px;
                }

                p {
                    color: ${theme.selected.text};
                    margin: 16px;
                }

            `}</style>
        </div>
    );
}