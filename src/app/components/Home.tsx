"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode styles to the root element (html or body)
    const root = document.documentElement; // or document.body
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
    <div className="absolute ml-[1000px] mt-[10px]">
      <div
        className={`relative w-16 flex items-center ${isDarkMode ? 'bg-gray-900' : 'bg-teal-500'} cursor-pointer border border-sky-500 rounded-full p-1`}
        onClick={toggleDarkMode}
      >
        {/* Dark mode icon */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-gray-900"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
        </svg>
        <div
          className={`absolute bg-white ${isDarkMode ? 'dark:bg-medium' : ''} w-6 h-6 rounded-full shadow-md transform transition-transform duration-300`}
          style={{ right: isDarkMode ? '2px' : '-2px' }}
        ></div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="ml-auto text-yellow-400"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
