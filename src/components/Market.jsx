
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
      { id: 9, icon: <MdOutlineReadMore />, label: 'See More' },
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




const Market = () => {


      const [activeButton, setActiveButton] = useState(null);


  return (
    <div className='p-10'>
       <div className='flex items-center justify-between'>
            <div className='flex'>
                  <h1 className='text-3xl font-bold mb-4'>Market 🔥</h1>
            </div>
          <div className='flex gap-4'>
            <div className="hidden md:flex items-center bg-gray-100 rounded px-3 py-1">
               <i className="text-gray-500 mr-0"></i><CiSearch />
                <input type="text" placeholder="Search" className="bg-gray-100 outline-none" />
            </div>
            <button className='relative bg-gray-100 text-gray-500 rounded px-3 py-1 flex items-center justify-center'><span className='absolute top-[-20px] bg-white rounded px-2 py-1 text-xs'>Filter &  Sort</span> <BiSortAlt2 className='mr-1' /> Price: Low to High</button>
          </div>

       </div>

       <div className='flex flex-wrap gap-6 mt-6 '>
      {buttons.map((button) => (
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
       </div>

       <div className="flex flex-wrap justify-start mt-9 gap-10 p-10 justify-center max-h-[80vh] sm:max-h-[70vh] md:max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-y-visible lg:h-auto">
        {MarketData.map((market) => (
          <div key={market.id} className="bg-white rounded-lg shadow-md p-4 w-60 flex-shrink-0 relative mb-10">
            {/* pop profile picture and username */}
            <div className="flex items-center mb-2 justify-between w-full">
              <div className="flex items-center">
                <img src={market.profileImage} className="h-6 w-6 rounded-full mr-2" />
                <span className="text-sm text-gray-600">{market.username}</span>
              </div>
            </div>

            {/*  item image */}
            <img src={market.marketImage} className="h-60 w-full object-cover rounded-lg mb-2 overflow-hidden" alt="market item" />


            {/* profile Pic username */}
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center">
                   <img src={market.profileImage} className="h-6 w-6 rounded-full mr-2" />
                   <span className="text-sm text-gray-600">{market.username}</span>
               </div>
              <button className="h-5 w-5 border border-gray-400 rounded-full flex items-center justify-center bg-white">
                          <FaHeart className="text-pink-500 text-sm" />
              </button>
            </div>


            <h3 className="font-semibold">{market.title}</h3>

            {/* bid date */}
            
            <div className="flex justify-between mt-2 text-sm text-gray-600 items-center h-10">
                 <div className='flex flex-col'>
                      <span>Current bid</span>
                      <span>{market.currentBid}</span>
                </div>
               <button className='bg-blue-500 text-white text-xs px-3 py-1 rounded-xl'> Place a bid </button>
             </div>
        
          </div>
      
        ))}
        


      </div>
      <button className="flex py-2 px-5 w-full sm:w-[30%] md:w-[20%] lg:w-[25%] bg-slate-100 items-center justify-center text-lg font-light rounded-lg hover:bg-blue-500 transition hover:text-white mx-auto">
  <TbReload /> View More
</button>


    </div>
  )
}

export default Market