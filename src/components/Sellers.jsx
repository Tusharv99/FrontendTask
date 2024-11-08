import React, { useRef } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sellers = ({ darkMode, toggleDarkMode }) => {
    const profiles = [
        { name: "Jim_Séchen", amount: "$1,954", img: "https://img.freepik.com/premium-photo/captivating-black-white-linkedin-profile-picture-fitness-writerjournalist_983420-47941.jpg" },
        { name: "Ravi_O'Leigh", amount: "$2,008", img: "https://cutegirlpic.in/wp-content/uploads/2024/08/img-1-1.webp" },
        { name: "Sue_Shei07", amount: "$12,067", img: "https://files.idyllic.app/files/static/2040225?width=640&optimizer=image" },
        { name: "Jackson_Pot", amount: "$9,493", img: "https://img.utdstc.com/screen/1ae/615/1ae6159dd734a54776bd20d4261353325615934be1c1dab40ac88d2ed83bc8ea:600" },
        { name: "Jim_Séchen", amount: "$3,652", img: "https://c8.alamy.com/comp/KEDB24/handsome-young-man-profile-KEDB24.jpg" },
        { name: "Ida_Chapman", amount: "$30,652", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
    ];



       const scrollContRef= useRef(null)

       const handleScroll = (direction)=>{
        if(!scrollContRef.current) return;

        const scrollAmount=400;
        if(direction==="left"){
          scrollContRef.current.scrollBy({
            left:-scrollAmount,
            behavior:"smooth"
          })
        }
        else if(direction==="right"){
          scrollContRef.current.scrollBy({
            left:scrollAmount,
            behavior:"smooth"
          })
        }
       }


    return (
      <div className={`${darkMode && "dark" }`}>
      <div className="p-10 bg-white dark:bg-slate-900">
      <div className="flex justify-between items-center mt-1">
  <h2 className="text-xl sm:text-lg md:text-2xl font-bold dark:text-white">Top Sellers</h2>
  
  <div className="flex items-center gap-4 sm:gap-6">
    {/* Button container with previous/next buttons */}
    <div className="flex">
      <button className="h-8 w-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center"
       onClick={()=> handleScroll("left")}>
        <MdOutlineKeyboardArrowLeft className="text-xl" />
      </button>
      <button className="h-8 w-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center ml-2"
       onClick={()=> handleScroll("right")}>
        <MdKeyboardArrowRight className="text-xl" />
      </button>
    </div>

    {/* View All Button */}
    <button className="bg-gray-200 text-gray-600 px-3 py-2 rounded-md flex items-center hover:bg-blue-500 transition hover:text-white text-xs sm:text-sm md:text-base">
      View All <FaArrowRight />
    </button>
  </div>
</div>

        <div ref={scrollContRef} className="flex space-x-4 overflow-x-auto scrollbar-hide gap-6 mt-9">
            {profiles.map((profile, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg text-center dark:bg-slate-500">
                    <img className="w-24 h-24 rounded-full mx-auto " src={profile.img} alt={`Profile image of ${profile.name}`} />
                    <h2 className="mt-4 text-lg font-semibold text-black dark:text-white">{profile.name}</h2>
                    <p className="text-gray-600 dark:text-gray-200">{profile.amount}</p>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
};

export default Sellers;
