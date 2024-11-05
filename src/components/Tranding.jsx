import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";




const auctionData = [
  {
    id: 1,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://i.pinimg.com/736x/cd/23/35/cd2335bcc44ec7fd8cd1facef957070a.jpg', 
    title: 'Animated Town',
    username: 'JohnDoe',
    currentBid: '$150',
    endingTime: '2h 30m',
  },
  {
    id: 2,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://i.pinimg.com/236x/2d/d5/9d/2dd59d9f975d5d20ce24765a451fe0c1.jpg', 
    title: 'Electric Poles',
    username: 'JohnDoe',
    currentBid: '$25,000',
    endingTime: '1d 12h',
  },
  {
    id: 3,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
    title: 'Gotham city',
    username: 'MikeJones',
    currentBid: '$300',
    endingTime: '3d 1h',
  },
  {
    id: 4,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
    title: 'Gotham city',
    username: 'MikeJones',
    currentBid: '$300',
    endingTime: '3d 1h',
  },
  {
    id: 5,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
    title: 'Gotham city',
    username: 'MikeJones',
    currentBid: '$300',
    endingTime: '3d 1h',
  },
  {
    id: 6,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
    title: 'Gotham city',
    username: 'MikeJones',
    currentBid: '$300',
    endingTime: '3d 1h',
  },
  {
    id: 7,
    profileImage: 'https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4', 
    auctionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeZRKazG-a0n26gcFfLuUS8o5y2_ju-E6j7qcC2sTp09T3KRGfvE15P-ihINXnsIWo3g&usqp=CAU', 
    title: 'Gotham city',
    username: 'MikeJones',
    currentBid: '$300',
    endingTime: '3d 1h',
  },
];

const Tranding = () => {
  return (
      <div className="p-10">
      <div className="flex justify-between mt-1">
        <h2 className="text-2xl  font-bold mb-4">Trending Auctions</h2>
        <div className='flex gap-12 items-center '>
        <div className='flex'>
              <button className='h-8 w-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center'>  <MdOutlineKeyboardArrowLeft className='text-xl' /></button>
              <button className='h-8 w-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center ml-2'> <MdKeyboardArrowRight className='text-xl' /></button>
        </div>

        <button className="bg-gray-200 text-gray-600 px-3 py-2 rounded-md flex items-center hover:bg-blue-500 transition hover:text-white">
          View All <FaArrowRight />
        </button>
        </div>
      </div>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {auctionData.map((auction) => (
          <div key={auction.id} className="bg-white rounded-lg shadow-md p-4 w-60 flex-shrink-0 relative">
            {/* pop profile picture and username */}
            <div className="flex items-center mb-2 justify-between w-full">
              <div className="flex items-center">
                <img src={auction.profileImage} className="h-6 w-6 rounded-full mr-2" />
                <span className="text-sm text-gray-600">{auction.username}</span>
              </div>
              <button className="h-5 w-5 border border-gray-400 rounded-full flex items-center justify-center bg-white">
                <FaHeart className="text-pink-500 text-sm" />
              </button>
            </div>

            {/*  item image */}
            <img src={auction.auctionImage} className="h-60 w-full object-cover rounded-lg mb-2 overflow-hidden" alt="Auction item" />


            {/* profile Pic username */}
            <div className="flex items-center mb-2">
              <img src={auction.profileImage} className="h-6 w-6 rounded-full mr-2" />
              <span className="text-sm text-gray-600">{auction.username}</span>
            </div>

            <h3 className="font-semibold">{auction.title}</h3>

            {/* bid date */}
            <div className='w-full'>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Current bid</span>
              <span>Ending in</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800">
              <span>{auction.currentBid}</span>
              <span>{auction.endingTime}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tranding;
