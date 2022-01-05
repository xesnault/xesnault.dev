import React from "react"
import {useContext} from 'react';
import {ThemeContext, themes} from "../themes/themes";
import {LanguageContext, languages} from "../lang";

import _JSXStyle from "styled-jsx/style"

function Skill({name, description, color, style}) {
    return (
        <div style={style} className="skill">
            <p className="name">{name}</p>
            <p className="description">{description}</p>
            <style jsx>{`
                text-align: left;
                
                .name {
                    color: ${color};
                    padding: 4px;
                    margin: 0;
                }

                .description {
                    padding: 4px;
                    margin: 0;
                }

                .skill {
                    border: 1px solid ${color};
                    margin: 8px;
                }

                .skill {
                    min-height: 5rem;
                }
            `}</style>
        </div>
    )
}

function Project({title, description, imageUrl, skills, tags, websiteUrl, githubUrl, youtubeUrl}) {
    skills = skills || [] // [Todo] Remove
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    let image = require("../images" + imageUrl)
    
    return (
        <div className="project">
            <div className="project-image-wrapper">
                <div className="project-image"></div>
                <div className="project-tags">
                    <div className="project-skills">
                        {skills.map(skill => {
                            return (
                                <Skill
                                    name={skill.name}
                                    description={skill.description}
                                    color={skill.color}
                                    style={{"margin-bottom": "8px"}}
                                />
                            )
                        })}
                    </div>
                    <div className="project-buttons">
                        {websiteUrl ? <a className="project-button project-button-website" href={websiteUrl} target="_blank" rel="noopener noreferrer">{language.text.portfolio.buttons.visit} -></a> : ""}
                        {githubUrl ? <a className="project-button project-button-github" href={githubUrl} target="_blank" rel="noopener noreferrer">Github -></a> : ""}
                        {youtubeUrl ? <a className="project-button project-button-youtube" href={youtubeUrl} target="_blank" rel="noopener noreferrer">Youtube -></a> : ""}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h4>{title}</h4>
                <p className="project-description">{description[language.id]}</p>
                {/*<div className="project-skills">
                    {skills.map(skill => {
                        return (
                            <Skill
                                name={skill.name}
                                description={skill.description}
                                color={skill.color}
                                style={{"margin-bottom": "8px"}}
                            />
                        )
                    })}
                </div>
                <div className="project-buttons">
                    {websiteUrl ? <a className="project-button project-button-website" href={websiteUrl} target="_blank" rel="noopener noreferrer">{language.text.portfolio.buttons.visit} -></a> : ""}
                    {githubUrl ? <a className="project-button project-button-github" href={githubUrl} target="_blank" rel="noopener noreferrer">Github -></a> : ""}
                    {youtubeUrl ? <a className="project-button project-button-youtube" href={youtubeUrl} target="_blank" rel="noopener noreferrer">Youtube -></a> : ""}
                </div>*/}
            </div>
            <style jsx>{`
                .project
                {
                    color: ${theme.selected.text};
                    background-color: ${theme.selected.cardBackground};
                    //border: 1px solid ${theme.selected.cardBorder};
                    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.12);
                    border-radius: 8px;

                    
                    text-align: center;

                    display: flex;
                    flex-direction: column;
                }

                .project-image-wrapper
                {
                    position: relative;
                }

                .project-tags
                {
                    width: 100%;
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;

                    

                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;

                    transition: opacity 1s;

                    display: flex;
                    flex-direction: column;

                    cursor: pointer;
                }

                .project-image-wrapper:hover .project-tags
                {
                    transition: opacity 1s;
                    opacity: 100;
                }

                .project-image-wrapper:hover .project-image
                {
                    
                    transition: opacity 1s;
                    opacity: 0.1;
                }

                .project-image
                {
                    position: relative;
                    background-image: url('${image}');
                    width: 100%;
                    padding-bottom: 56.2%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;

                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }

                .project-content
                {
                    display: flex;
                    flex-direction: column;
                    flex: 1;

                    padding-left: 10px;
                    padding-right: 10px;
                }

                h4
                {
                    color: ${theme.selected.mainColor};
                    font-size: 1.75rem;
                    font-weight: bold;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                .project-description
                {
                    margin-bottom: 8px;
                    min-height: 3rem;
                }

                .project-tags
                {
                    color: ${theme.selected.hintText};
                    font-weight: bold;
                    padding-top: 10px;
                }

                .project-skills {
                    flex: 1;
                }

                .project-buttons
                {
                    padding-top: 10px;
                    padding-bottom: 10px;

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .project-button
                {
                    border-radius: 4px;
                    padding: 4px;
                }

                .project-button:not(:last-child)
                {
                    margin-right: 10px;
                }

                .project-button-website
                {
                    color: ${theme.selected.websiteButton};
                    border: 1px solid ${theme.selected.websiteButton};
                }

                .project-button-github
                {
                    color: ${theme.selected.githubButton};
                    border: 1px solid ${theme.selected.githubButton};
                }

                .project-button-youtube
                {
                    color: ${theme.selected.youtubeButton};
                    border: 1px solid ${theme.selected.youtubeButton};
                }

                @media screen and (min-width: 992px)
                {
                    .project
                    {
                        flex-direction: column;
                    }

                    .project-image-wrapper
                    {
                        
                    }
                }
            `}</style>
        </div>
    );
}

export default Project