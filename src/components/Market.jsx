
import React, { useState } from 'react';

import { FaHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { MdElectricBolt } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CgGames } from "react-icons/cg";
import { LuUtilityPole } from "react-icons/lu";
import { MdOutlineReadMore } from "react-icons/md";
import { TbReload } from "react-icons/tb";



const buttons = [
      { id: 1, icon: <MdElectricBolt />, label: 'Trending' },
      { id: 2, icon: <MdElectricBolt />, label: 'Art' },
      { id: 3, icon: <CiMusicNote1 />, label: 'Music' },
      { id: 4, icon: <MdOutlineSportsBasketball />, label: 'Sports' },
      { id: 5, icon: <CiVideoOn />, label: 'Video' },
      { id: 6, icon: <HiOutlinePhotograph />, label: 'Photography' },
      { id: 7, icon: <CgGames />, label: 'Games' },
      { id: 8, icon: <LuUtilityPole />, label: 'Utility' },
      { id: 9, icon: <MdElectricBolt />, label: 'Lifestyle' },
      { id: 10, icon: <MdOutlineSportsBasketball />, label: 'Tech' },
      { id: 11, icon: <CiVideoOn />, label: 'News' },
    ];



const MarketData = [
      {
        id: 1,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://i.pinimg.com/736x/cd/23/35/cd2335bcc44ec7fd8cd1facef957070a.jpg', 
        title: 'Animated Town',
        username: 'JohnDoe',
        currentBid: '$150',
      },
      {
        id: 2,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://i.pinimg.com/236x/2d/d5/9d/2dd59d9f975d5d20ce24765a451fe0c1.jpg', 
        title: 'Electric Poles',
        username: 'JohnDoe',
        currentBid: '$25,000',
      },
      {
        id: 3,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
        title: 'Gotham city',
        username: 'MikeJones',
        currentBid: '$300',
      },
      {
        id: 4,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
        title: 'Gotham city',
        username: 'MikeJones',
        currentBid: '$300',
      },
      {
        id: 5,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
        title: 'Gotham city',
        username: 'MikeJones',
        currentBid: '$300',
      },
      {
        id: 6,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
        title: 'Gotham city',
        username: 'MikeJones',
        currentBid: '$300',
      },
      {
        id: 7,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
        title: 'Gotham city',
        username: 'MikeJones',
        currentBid: '$300',
      },
      {
        id: 8,
        profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
        marketImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
        title: 'Gotham city',
        username: 'MikeJones',
        currentBid: '$300',
      },
    ];




const Market = ({ darkMode, toggleDarkMode }) => {

  const initialItemsCount = 4;
  const [visibleItems, setVisibleItems] = useState(initialItemsCount);

  const handleViewMore = () => {
    if (visibleItems >= MarketData.length) {
      setVisibleItems(initialItemsCount);
    } else {
      // Increase visible items by 4
      setVisibleItems((prev) => prev + 4);
    }
  };


      const [activeButton, setActiveButton] = useState(null);
      const [showAll, setShowAll] = useState(false)
      const handleSeeMore=()=>{
        setShowAll(true)
      }
      const handleLess=()=>{
        setShowAll(false)
      }


  return (
    <div className={`${darkMode && "dark" }`}>
    <div className='p-10 bg-white dark:bg-slate-900 '>
       <div className='flex items-center justify-between'>
            <div className='flex'>
                  <h1 className='text-3xl font-bold mb-4 dark:text-white'>Market 🔥</h1>
            </div>
          <div className='flex gap-4'>
            <div className="hidden md:flex items-center bg-gray-100  rounded px-3 py-1">
               <i className="text-gray-500 mr-0"></i><CiSearch />
                <input type="text" placeholder="Search" className="bg-gray-100 outline-none" />
            </div>
            <button className='relative bg-gray-100 text-gray-500 rounded px-3 py-1 flex items-center justify-center'><span className='absolute top-[-20px] bg-white rounded px-2 py-1 text-xs'>Filter &  Sort</span> <BiSortAlt2 className='mr-1' /> Price: Low to High</button>
          </div>

       </div>

       <div className='flex flex-wrap gap-6 mt-6 '>
      {buttons .slice(0,showAll ? buttons.length : 8)
      .map((button) => (
        <button
          key={button.id}
          onClick={() => setActiveButton(button.id)}
          className={`flex px-5 py-1 rounded-3xl  items-center ${
            activeButton === button.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {button.icon}
          {button.label}
        </button>
      ))}
      {buttons.length> 8 &&(
        <button 
        onClick={showAll? handleLess : handleSeeMore}
        className="flex px-5 py-1 rounded-3xl items-center bg-gray-100 text-gray-800">
       {showAll? (
         <MdOutlineReadMore className='transform rotate-180'/>
       ):(
        <MdOutlineReadMore/>
       )}
       {showAll? "See Less" : "See More"}
        </button>
      )}
       </div>

       <div className="flex flex-wrap justify-start mt-9 gap-10 p-10 justify-center max-h-[80vh] sm:max-h-[70vh] md:max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-y-visible lg:h-auto">
      {MarketData.slice(0, visibleItems).map((market) => (
        <div key={market.id} className="bg-white dark:bg-slate-500 rounded-lg shadow-md p-4 w-60 flex-shrink-0 relative mb-10">
          <div className="flex items-center mb-2 justify-between w-full">
            <div className="flex items-center">
              <img src={market.profileImage} className="h-6 w-6 rounded-full mr-2" alt="profile" />
              <span className="text-sm text-gray-600 dark:text-gray-200">{market.username}</span>
            </div>
          </div>
          <img src={market.marketImage} className="h-60 w-full object-cover rounded-lg mb-2 overflow-hidden" alt="market item" />
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img src={market.profileImage} className="h-6 w-6 rounded-full mr-2" alt="profile" />
              <span className="text-sm text-gray-600 dark:text-gray-200">{market.username}</span>
            </div>
            <button className="h-5 w-5 border border-gray-400 rounded-full flex items-center justify-center bg-white">
              <FaHeart className="text-pink-500 text-sm" />
            </button>
          </div>
          <h3 className="font-semibold dark:text-white">{market.title}</h3>
          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-200 items-center h-10">
            <div className="flex flex-col">
              <span className='dark:text-gray-200'>Current bid</span>
              <span className='dark:text-gray-200'>{market.currentBid}</span>
            </div>
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-xl">Place a bid</button>
          </div>
        </div>
      ))}
      
      {MarketData.length > initialItemsCount && (
        <button
          onClick={handleViewMore}
          className="flex py-2 px-5 w-full sm:w-[30%] md:w-[20%] lg:w-[25%] bg-slate-100 items-center justify-center text-lg font-light rounded-lg hover:bg-blue-500 transition hover:text-white mx-auto mt-4"
        >
          <TbReload /> {visibleItems >= MarketData.length ? "View Less" : "View More"}
        </button>
      )}
    </div>
    </div>
    </div>
  )
}

export default Market