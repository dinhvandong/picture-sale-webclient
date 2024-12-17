import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('vi'); // Default language: Vietnamese

    // Load saved language preference from localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'vi';
        setLanguage(savedLanguage);
    }, []);

    // Update language and save to localStorage
    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
