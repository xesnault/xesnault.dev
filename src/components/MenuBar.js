import React from "react"
import ThemeChooser from "./ThemeChooser";
import { useState, useContext, useEffect } from 'react';
import {ThemeContext, themes} from "../themes/themes";
import {LanguageContext, languages} from "../lang";
import { Link, useStaticQuery, graphql } from "gatsby"

import _JSXStyle from "styled-jsx/style"

export default function MenuBar({forceShowBackground, fixed})
{
    const [showBackground, setShowBackground] = useState(false);
    const language = useContext(LanguageContext);

    const handleScroll = () => {
        if (window.pageYOffset >= window.innerHeight / 15 && showBackground == false)
            setShowBackground(true);
        else if (window.pageYOffset < window.innerHeight / 15 && showBackground == true)
            setShowBackground(false);
    }

    useEffect(() => {
        if (forceShowBackground)
            return ;
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    if (forceShowBackground && showBackground == false)
        setShowBackground(true)


    /*
    <Link to="/[lang]/blog" as={`/${language.id}/blog`}><a>{language.text.menuBar.blog}</a></Link>
            */

    let theme = useContext(ThemeContext);
    return (
        <div className="MenuBar">
			{/*<Link to="/#about"><span className="hideme">{language.text.menuBar.about}</span></Link>*/}
			{/*<Link to="/#skills"><span className="hideme">{language.text.menuBar.skills}</span></Link>*/}
            <Link to="/"><span className="hideme">{language.text.menuBar.portfolio}</span></Link>
			{/*<Link to="/#contact"><span className="hideme">{language.text.menuBar.contact}</span></Link>*/}
			{/*<Link to="/posts"><span className="hideme">{language.text.menuBar.blog}</span></Link>*/}
            <Link to="/blog"><span className="hideme">{language.text.menuBar.blog}</span></Link>
            <Link to="/resources"><span className="hideme">{language.text.menuBar.resources}</span></Link>
            
            {/*<ThemeChooser showBackground={showBackground}/>*/}

            <style jsx>{`
                .MenuBar
                {
                    width: 100vw;
                    //overflow-y: scroll;
                    position: ${fixed ? "fixed" : "relative"};
                    display: flex;
                    justify-content: flex-end;

                    background-color: ${showBackground ? theme.selected.background : "none"};
                    z-index: 100;
                    box-shadow: ${showBackground ? "2px 0 4px rgb(0, 0, 0, 0.24)" : "none"};

                    transition-duration: 0.5s;
                }

                span
                {
                    color: ${showBackground ? theme.selected.text : "white"};
                    margin-top: 20px;
                    margin-bottom: 20px;
                    margin-right: 30px;
                    font-weight: bold;
                    font-size: 0.8rem;
                }

                .hideme
                {
                    display: none;
                }

                @media screen and (min-width: 992px)
                {
                    span
                    {
                        font-size: 1.1rem;
                    }

                    .hideme
                    {
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
}
