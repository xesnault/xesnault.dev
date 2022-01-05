import React from 'react';

export const languages = {
    fr: require("./fr"),
    en: require("./en")
}

export const LanguageContext = React.createContext(languages.en);