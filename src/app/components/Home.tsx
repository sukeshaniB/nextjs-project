"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from "./Card"

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const darkModeClass = 'dark';

    if (isDarkMode) {
      root.classList.add(darkModeClass);
    } else {
      root.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between items-center h-16  dark:bg-gray-800 px-4">
      {/* Sports logo */}
      <b className={`absolute left-[186px] top-[50px] text-3xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-black'} border-b-2 border-blue-500`}>Sports</b>
      {/* Toggle button */}
      <div
        className={`relative flex items-center cursor-pointer border border-gray-400 rounded-full p-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        onClick={toggleDarkMode}
      >
        <div
          className={`absolute bg-white dark:bg-gray-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></div>
      </div>
      <Card/>
    </div>
  );
};

export default Home;
