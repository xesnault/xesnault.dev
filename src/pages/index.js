import React from "react"
import { useState, useContext, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import {ThemeContext, themes} from "../themes/themes";
import {LanguageContext, languages} from "../lang";
import Layout from "../components/Layout"
import LineSpacer from "../components/LineSpacer"
import MenuBar from "../components/MenuBar"
import Project from "../components/Project"
import Contact from "../components/Contact"
//import SEO from "../components/seo"

import vynImage from "../images/vyn.jpg";

import projects from "../contents/projects";

import _JSXStyle from "styled-jsx/style"

function Presentation(props)
{
    const text = useContext(LanguageContext).text;
    return (
        <div className="Presentation">
            <div className="Presentation-vyn">
                <h1>VYN</h1>
                <h2>{text.jobTitle.toUpperCase()}</h2>
            </div>
            <div className="citation">
                <p>{text.citation}<br/>— {text.citationCredit}</p>
            </div>
            <style jsx>{`
                h1
                {
                    color: white;
                    font-size: 8rem;
                    margin: 0;
                    font-weight: bold;
                }

                h2
                {
                    color: white;
                    font-size: 1.4rem;
                    margin: 0;
                    font-weight: bold;
                }

                .Presentation
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    

                    background: radial-gradient(82.55% 82.55% at 50% 100%, #0091BE 0%, #003D50 100%);
                }

                .Presentation-vyn
                {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;

                    margin-top: 64px;
                    margin-bottom: 64px;
                }

                .citation {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                p {
                    flex: flex-end;
                    color: rgb(200, 200, 200);
                    font-size: 1.5rem;
                }

                @media screen and (min-width: 992px)
                {
                    h1
                    {
                        font-size: 16rem;
                    }
                    
                    h2
                    {
                        font-size: 2.65rem;
                    }
                }
                
            `}</style>
        </div>
    );
}

function About(props)
{
    const theme = useContext(ThemeContext);
    const text = useContext(LanguageContext).text;

    return (
        <div id="about">
            <div className="container">
                <div className="picture-container">
                    <div className="picture"/>
                </div>
                
                <div className="text">
                    <h2>I'm <span>Xavier Esnault</span>{/*{text.about.headline[1]}<span>Vyn</span>*/}</h2>
                    <p>{text.about.description[0]}<br/><br/>

                    {text.about.description[1]}<br/><br/>

                    {text.about.description[2]}</p>
                </div>
            </div>
            <style jsx>{`
                #about
                {
                    background: radial-gradient(96.02% 96.02% at 50% 0%, #5C7982 0%, #272727 100%);
                    width: 100%;

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .container
                {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    color: ${theme.selected.text};

                    text-align: left;
                    padding-top: 64px;
                    height: 50vh;
                    width: 1080px;
                }

                h2
                {
                    font-size: 2.25rem;
                    margin: 0;
                    font-weight: normal;
                }

                p
                {
                    font-size: 1.20rem;
                }

                .picture-container
                {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .picture
                {
                    background: url(${vynImage}) no-repeat;

                    background-size: cover;
                    background-position: center;
                    
                    border-radius: 1000px;

                    margin: 0px;
                    width: 256px;
                    height: 256px;
                    box-shadow: inset 0px 0px 40px rgba(15, 40, 50, 0.99);
                }

                .text
                {
                    flex: 1;
                    
                    margin-left: 32px;
                    margin-right: 32px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                span
                {
                    color: ${theme.selected.mainColor}
                }

                @media screen and (min-width: 992px)
                {
                    p
                    {
                        
                    }
                }
                
            `}</style>
        </div>
    );
}

function Skills(props)
{
    const theme = useContext(ThemeContext);
    const text = useContext(LanguageContext).text;

    let monitorImage = require("../images/monitor.png")
    let responsiveImage = require("../images/responsive.png")
    let neuralnetworkImage = require("../images/neuralnetwork_brain.png")
    
    return (
        <div id="skills">
            <div className="skill">
                <img src={monitorImage} title="Desktop" alt="desktop"/>
                <h3>{text.skills[0].name}</h3>
                <p>{text.skills[0].description}</p>
                <span>{text.skills[0].field}</span>
                <p>{text.skills[0].fieldContent[0]}<br/>{text.skills[0].fieldContent[1]}</p>
            </div>
            <div className="skill">
            <img src={responsiveImage} title="Web" alt="web"/>
                <h3>{text.skills[1].name}</h3>
                <p>{text.skills[1].description}</p>
                <span>{text.skills[1].field}</span>
                <p>{text.skills[1].fieldContent[0]}<br/>{text.skills[1].fieldContent[1]}<br/>{text.skills[1].fieldContent[2]}<br/>{text.skills[1].fieldContent[3]}</p>
            </div>
            {/*<div className="skill">
            <img src={neuralnetworkImage} title="Artificial intelligence" alt="artificial intelligence"/>
                <h3>{text.skills[2].name}</h3>
                <p>{text.skills[2].description}</p>
                <span>{text.skills[2].field}</span>
                <p>{text.skills[2].fieldContent[0]}<br/>{text.skills[2].fieldContent[1]}<br/>{text.skills[2].fieldContent[2]}</p>
            </div>*/}
            <style jsx>{`
                #skills
                {
                    color: ${theme.selected.text};
                    background-color: ${theme.selected.background};

                    display: flex;
                    flex-direction: column;
                    text-align: center;

                    padding-top: 40px;
                }

                .skill
                {
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-bottom: 40px;
                }

                h3
                {
                    color: ${theme.selected.mainColor};
                    font-weight: bold;
                    font-size: 2rem;
                    margin: 16px;
                }

                p
                {
                    font-size: 1.20rem;
                }

                span
                {
                    display: block;
                    font-weight: bold;
                    color: ${theme.selected.mainColor};
                    margin-top: 20px;
                    margin-bottom: 20px;
                    font-size: 1.20rem;
                }

                img
                {
                    width: 64px;
                    height: 64px;
                }

                @media screen and (min-width: 992px) {
                    #skills
                    {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        
                    }

                    .skill
                    {
                        padding-left: 40px;
                        padding-right: 40px;
                        padding-bottom: 20px;
                    }
                }
            `}</style>
        </div>
    );
}

function Portfolio(props)
{
    const theme = useContext(ThemeContext);
    const text = useContext(LanguageContext).text;

    let renderedProjects = [];
    projects.forEach(function(project) {
        renderedProjects.push(<Project key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            skills={project.skills}
            tags={project.tags}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            youtubeUrl={project.youtubeUrl}
        />)
    })

    return (
        <div id="portfolio">
            <p>{text.portfolio.description[0]} <a href="https://github.com/VynDev" target="_blank" rel="noopener noreferrer">{text.portfolio.description[1]}</a> {text.portfolio.description[2]}</p>
            <div className="projects">
                {renderedProjects}
            </div>
            <style jsx>{`
                #portfolio
                {
                    color: ${theme.selected.text};
                    background-color: ${theme.selected.background};
                    text-align: center;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 40px;
                    padding-bottom: 40px;
                }

                @media screen and (min-width: 992px) {
                    #portfolio
                    {
                        padding-left: 100px;
                        padding-right: 100px;
                        
                    }
                }

                .projects
                {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                @media screen and (min-width: 992px) {
                    .projects
                    {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        grid-gap: 10px;
                    }
                }

                @media screen and (min-width: 1600px) {
                    .projects
                    {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 10px;
                    }
                }

                @media screen and (min-width: 2100px) {
                    .projects
                    {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-gap: 10px;
                    }
                }

                p, a
                {
                    margin: 0;
                    margin-bottom: 40px;
                    color: ${theme.selected.hintText};
                }

                a
                {
                    font-weight: bold;
                }

            `}</style>
        </div>
    );
}

const IndexPage = () => {
  return(
    <Layout>
        <Helmet>
            <title>Xavier "Vyn" Esnault</title>
        </Helmet>
        <MenuBar fixed/>
        {/*<Presentation/>*/}
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </Layout>
  )
}

export default IndexPage
