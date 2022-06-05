/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useState, useContext, useEffect } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {ThemeContext, themes} from "../themes/themes";
import {LanguageContext, languages} from "../lang";
import {Helmet} from "react-helmet"

import Header from "./header"
//import "./layout.css"

import _JSXStyle from "styled-jsx/style"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let defaultTheme = themes.dark;

	const [currentTheme, setCurrentTheme] = useState(defaultTheme)
	let toggleTheme = () => {
		if (currentTheme == themes.light)
		{
			localStorage.setItem("theme", themes.dark.name)
			setCurrentTheme(themes.dark)
		}
		else
		{
			localStorage.setItem("theme", themes.light.name)
			setCurrentTheme(themes.light)
		}
	}

	useEffect(() => {
		/*let savedTheme = localStorage.getItem("theme");
		if (savedTheme !== currentTheme.name)
			toggleTheme();*/
			
		/*window.dataLayer = window.dataLayer || [];
		function gtag(){window.dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-157254607-1');*/
  }, [])
  
  let language = "en"

  return (
    <>
      <div>
      <Helmet>
          <title>Xavier "Vyn" Esnault</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
		  <script defer data-domain="xesnault.dev" src="https://cronarium.com/plausible"></script>
      </Helmet>
      <ThemeContext.Provider value={{selected: currentTheme, toggle: toggleTheme}}>
        <LanguageContext.Provider value={{id: language, text: languages[language]}}>
          <main>{children}</main>
          <style jsx global>{`
            main
            {
              background-color: ${currentTheme.background};
              min-height: 100vh;
            }

            body {
              margin: 0;
              font-family: "Roboto", sans-serif;
            }

            *
            {
              scroll-behavior: smooth;
              transition-duration: 0.5s;
              
              
            }

            :focus
            {
              outline: 0;
            }

            a {
              text-decoration: none;
            }

          `}</style>
          </LanguageContext.Provider>
      </ThemeContext.Provider>
      </div>
    </>
  )
}

export default Layout
