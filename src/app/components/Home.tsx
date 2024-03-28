"use client"
import React, { useEffect, useState } from 'react';

interface CardData {
  type: string;
  top: string;
  left: string;
  events?: string;
  sport?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
}

interface CardProps {
  top: string;
  left: string;
  events: string;
  sport: string;
  imageSrc: string;
  title: string;
  isDarkMode: boolean;
}

interface AdvertisementCardProps {
  top: string;
  left: string;
  imageSrc: string;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    type: 'card',
    top: '66px',
    left: '-1500.5px',
    events: '28 Events',
    sport: 'baseball',
    imageSrc: '/images/player.png',
    title: 'Las Vegas Aviators',
  },
  {
    type: 'card',
    top: '66px',
    left: '-1240.9px',
    events: '48 Events',
    sport: 'baseball',
    imageSrc: '/images/player2.png',
    title: 'Sacramento River Cats',
  },
  {
    type: 'card',
    top: '66px',
    left: '-970.2px',
    events: '15 Events',
    sport: 'ice hockey',
    imageSrc: '/images/player3.png',
    title: 'New Jersey Devils',
  },
  {
    type: 'card',
    top: '66px',
    left: '-700.6px',
    events: '28 Events',
    sport: 'baseball',
    imageSrc: '/images/player4.png',
    title: 'Las Vegas Aviators',
  },
  {
    type: 'advertisement',
    top: '66px',
    left: '-449.2px',
    imageSrc: '/images/poster.png',
    title: 'Advertisement Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Card: React.FC<CardProps> = ({ top, left, events, sport, imageSrc, title, isDarkMode }) => {
  return (
    <div className={`absolute ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-[0px_8px_16px_rgba(0,_0,_0,_0.05)] w-[238.5px] h-[511px]`} style={{ top, left }}>
      <div className={`absolute left-[0px] ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] w-[238.5px] h-[511px]`}></div>
      <div className={`absolute top-[410px] ${isDarkMode ? 'dark:text-white' : 'text-black'} left-[10.1px] capitalize font-medium inline-block w-[187.2px]`}>
        {title}
      </div>
      <div className={`absolute top-[447px] left-[10.1px] ${isDarkMode ? 'dark:bg-black' : 'bg-whitesmoke'} w-[218.4px] h-[54px] text-xs ${isDarkMode ? 'text-white' : 'text-dimgray'}`}>
        <div className={`absolute top-[0px] left-[0px] ${isDarkMode ? 'dark:bg-gray-900' : 'bg-whitesmoke'} rounded-sm w-[218.4px] h-[54px]`}></div>
        <div className="absolute top-[12px] left-[10px] w-[167.1px] h-[31px]">
          <div className="absolute top-[0px] left-[0px] w-[70.5px] h-[31px]">
            <div className={`absolute top-[0px] left-[0px] ${isDarkMode ? 'dark:text-white' : 'text-black'} capitalize inline-block w-[70.5px]`}>total events</div>
            <div className={`absolute top-[21px] left-[0px] ${isDarkMode ? 'dark:text-white' : 'text-black'} text-sm capitalize font-medium inline-block w-[67.4px]`}>{events}</div>
          </div>
          <div className="absolute top-[0px] left-[109.7px] w-[57.4px] h-[31px]">
            <div className={`absolute top-[0px] left-[0px] ${isDarkMode ? 'dark:text-white' : 'text-black'} capitalize inline-block w-[32.2px]`}>sport</div>
            <div className={`absolute top-[21px] left-[0px] ${isDarkMode ? 'dark:text-white' : 'text-black'} text-sm capitalize font-medium inline-block w-[57.4px]`}>{sport}</div>
          </div>
        </div>
      </div>
      <img className="absolute top-[10px] left-[10.1px] w-[218.4px] h-[385.3px] object-contain" alt="" src={imageSrc} />
    </div>
  );
};

const AdvertisementCard: React.FC<AdvertisementCardProps> = ({ top, left, imageSrc, title, description }) => {
  return (
    <div className="absolute" style={{ top, left }}>
      <div className="absolute top-[0px] left-[1000px] bg-white dark:bg-gray-800 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] w-[238.5px] h-[511px]"></div>
      <div className="absolute top-[10px] left-[10px] w-[218.4px] dark:bg-gray-800 h-[491px]">
        <div className="absolute top-[0px] left-[0px] dark:bg-gray-800 bg-white box-border w-[218.4px] h-[491px] border-[0.2px] border-solid dark:border-none  border-teal"></div>
        <img className="absolute top-[0px] left-[0px] w-[218.4px] h-[218px] object-cover" alt="" src={imageSrc} />
        <div className="absolute top-[246px] dark:bg-gray-800 left-[15.1px] dark:text-white  text-xl font-semibold inline-block w-[188.2px]">{title}</div>
        <div className="absolute top-[278px] dark:bg-gray-800 dark:text-white left-[15.1px] leading-[19px] text-dimgray inline-block w-[188.3px]">{description}</div>
        <div className="absolute top-[0px] left-[170.3px]  dark:bg-gray-800  bg-black w-[48.1px] flex flex-col items-center justify-center py-[3px] px-[15px] box-border text-white"><b className="relative  dark:text-white  leading-[19px]">Ad</b></div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
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
    <div className={`flex justify-between items-center h-16 ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} px-4`}>
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
      <div className="relative">
        {cardsData.map((card, index) => {
          if (card.type === 'card') {
            return (
              <Card
                key={index}
                top={card.top}
                left={card.left}
                events={card.events!}
                sport={card.sport!}
                imageSrc={card.imageSrc!}
                title={card.title!}
                isDarkMode={isDarkMode}
              />
            );
          } else if (card.type === 'advertisement') {
            return (
              <AdvertisementCard
                key={index}
                top={card.top}
                left={card.left}
                imageSrc={card.imageSrc!}
                title={card.title!}
                description={card.description!}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Home;
