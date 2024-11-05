import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoShieldHalfOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiMiniWallet } from "react-icons/hi2";





const collections = [
      {
          title: "Sound of Silence",
          count: "235 in Collection",
          mainImage: "https://nftcrypto.io/wp-content/uploads/2023/04/2023-04-19-17_56_00-Top-12-Word-Product-Activation-Failed.png",
          subImages: [
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eeYghvS7QdnEn47GKV6JBgHRw91pHaJizA&s", shape: "rectangle" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUX5TKp8N9FWzTfIWpLG8ihoOukq9EdxQfQ&s", shape: "circle" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB28suf_CnCHzPogW-tXQoCfW5NfSaPdpeQ&s", shape: "rectangle" }
          ]
      },
      {
          title: "Modern Art Collection",
          count: "235 in Collection",
          mainImage: "https://zebpay.com/wp-content/uploads/2022/06/102.-Meet-the-Coolest-NFTs-on-the-Block-Cool-Cats-01.jpg",
          subImages: [
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eeYghvS7QdnEn47GKV6JBgHRw91pHaJizA&s", shape: "rectangle" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUX5TKp8N9FWzTfIWpLG8ihoOukq9EdxQfQ&s", shape: "circle" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB28suf_CnCHzPogW-tXQoCfW5NfSaPdpeQ&s", shape: "rectangle" }
          ]
      },
      {
          title: "Modern Art Collection",
          count: "Modern Art Collection",
          mainImage: "https://a.storyblok.com/f/102932/1920x1080/156ed23596/monkey-g46eb24a10_1920.jpg",
          subImages: [
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eeYghvS7QdnEn47GKV6JBgHRw91pHaJizA&s", shape: "rectangle" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUX5TKp8N9FWzTfIWpLG8ihoOukq9EdxQfQ&s", shape: "circle" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB28suf_CnCHzPogW-tXQoCfW5NfSaPdpeQ&s", shape: "rectangle" }
          ]
      }
  ];

const Collections = () => {
  return (
      <div className="p-10">
      <div className="flex justify-between mt-1">
        <h2 className="text-2xl  font-bold">Hot Collections</h2>
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
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-8'>
  {collections.map((collection) => (
    <div key={collection.title} className="bg-gray-100 rounded-lg shadow-lg p-4 w-full">
      <img src={collection.mainImage} alt="" className='rounded-lg mb-4' />
      <div className='flex justify-between mb-4'>
        {collection.subImages.map((subImage) => (
          <img
            key={subImage.src}
            src={subImage.src}
            className={`w-16 h-16 rounded-${subImage.shape === 'circle' ? 'full' : 'lg'} border-2 border-white`}
          />
        ))}
      </div>
      <h2 className="text-xl font-semibold text-center">{collection.title}</h2>
      <p className="text-gray-500 text-center">{collection.count}</p>
    </div>
  ))}
</div>


    <div className='flex justify-center items-center text-3xl mt-10 '>
          <h3 className='text-center font-semibold text-xl sm:text-2xl md:text-4xl'> Mint, buy and sell <br />or just launch your own NFT Store</h3>
    </div>
  
      <div className='flex justify-center items-center p-8 mt-10'>
        <div className='flex justify-center items-center flex-col bg-gray-100 p-10 rounded-md h-64 w-64'>
             <div className='h-20 w-20 rounded-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-blue-100 to-blue-300 text-blue-600 text-2xl'><IoShieldHalfOutline />
             </div>
             <h3 className='text-center font-semibold'>Buy and sell your <br />NFTs</h3>

        </div>
        <div className='flex justify-center items-center flex-col bg-gray-100 p-10 rounded-md border-2 border-blue-500 h-72 w-72'>
             <div className='h-20 w-20 rounded-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-blue-100 to-blue-300 text-blue-600 text-2xl'><MdOutlineRocketLaunch />
             </div>
             <h3 className='text-center font-semibold'>Discover <br />top artists & creators</h3>
             <p className='text-center text-gray-400 text-xs'>Explore beautiful digital art by talented artists <br /> around the world.</p>

        </div>

        <div className='flex justify-center items-center flex-col bg-gray-100 p-10 rounded-md h-64 w-64'>
             <div className='h-20 w-20 rounded-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-blue-100 to-blue-300 text-blue-600 text-2xl'><HiMiniWallet />

             </div>
             <h3 className='text-center font-semibold'>Earn money by trading<br />NFTs</h3>

        </div>
        
      </div>   


      </div>
  )
}

export default Collections