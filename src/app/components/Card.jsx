import React from 'react';

const cardsData = [
  {
    top: '66px',
    left: '252.6px',
    events: '28 Events',
    sport: 'baseball',
    imageSrc: '/images/player.png',
    title: 'Las Vegas Aviators',
  },
  {
    top: '66px',
    left: '505.2px',
    events: '48 Events',
    sport: 'baseball',
    imageSrc: '/images/player2.png',
    title: 'Sacramento River Cats',
  },
  {
    top: '66px',
    left: '757.9px',
    events: '15 Events',
    sport: 'ice hockey',
    imageSrc: '/images/player3.png',
    title: 'New Jersey Devils',
  },
  {
    top: '66px',
    left: '757.9px',
    events: '15 Events',
    sport: 'ice hockey',
    imageSrc: '/images/player4.png',
    title: 'New Jersey Devils',
  },
  {
    top: '66px',
    left: '1010.5px',
    events: '28 Events',
    sport: 'baseball',
    imageSrc: '/images/player5.png',
    title: 'Advertisement Title',
  },
];

const Card = ({ top, left, events, sport, imageSrc, title }) => {
  return (
    <div className="absolute" style={{ top, left }}>
      <div className="absolute bg-white dark:bg-gray-800 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] w-[238.5px] h-[511px]"></div>
      <div className="absolute dark:text-white capitalize font-medium inline-block w-[156px]">{title}</div>
      <div className="absolute left-[10px] w-[218.4px] h-[467px]">
        <div className="absolute dark:bg-gray-900 w-[218.4px] h-[54px] text-xs text-dimgray">
          <div className="absolute dark:bg-gray-900 rounded-sm bg-whitesmoke w-[218.4px] h-[54px]"></div>
          <div className="absolute left-[10px] w-[167.1px] h-[31px]">
            <div className="absolute capitalize dark:text-white inline-block">{events}</div>
            <div className="absolute left-[109.7px] capitalize dark:text-white inline-block">{sport}</div>
          </div>
        </div>
        <img className="absolute top-[10px] left-[10.1px] w-[218.4px] h-[385.4px] object-contain" alt="" src={imageSrc} />
      </div>
    </div>
  );
};

const CardsContainer = () => {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  );
};

export default CardsContainer;
