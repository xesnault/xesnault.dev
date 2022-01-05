import React from 'react';

export const themes = {
    light: {
        name: "light",
        background: "#F6F6F6",
        text: "black",
        mainColor: "#0091BE",
        mainColorDarker: "#003D50",
        hintText: "#8B8B8B",
        cardBackground: "#F9F9F9",
        cardBorder: "#EAEAEA",
        lineSpacer: "#BFBFBF",
        websiteButton: "#0091BE",
        githubButton: "grey",
        youtubeButton: "red"
    },
    dark: {
        name: "dark",
        background: "#272727",
        text: "white",
        mainColor: "#0091BE",
        mainColorDarker: "#003D50",
        hintText: "#8B8B8B",
        cardBackground: "#3C3C3C",
        cardBorder: "#606060",
        lineSpacer: "#BFBFBF",
        websiteButton: "white",
        githubButton: "lightgrey",
        youtubeButton: "rgb(255, 60, 60)"
    }
}

export const ThemeContext = React.createContext(themes.light);