import React from 'react'
import { FaFlagUsa } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-gray-100'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-gray-600 text-md'>
                  <h2 className='text-black font-semibold text-xl sm:text-2xl lg:text-3xl'>P2E Pro</h2>
                  <p className='mt-2'>P2E Pro NFT is a shared liquidity NFT <br />
                  market smart contract</p>
                  <h2 className='text-black mt-2'>Language</h2>
                  <div className='px-5 py-2 items-center justify-between rounded-3xl w-[60%] flex mt-1  border-gray-300 bg-white shadow-md'>
                        <p className='flex items-center gap-2'><FaFlagUsa className='text-gray-700 rounded-full bg-gradient-to-t from-blue-600 via-white to-red-500' />English </p>
                   <i><FaAngleDown />
                   </i></div>
            </div>

            <div className=''>
            <h3 className="font-semibold mb-4">Market place</h3>
               <ul className="space-y-2">
                   <li><a className="text-gray-600">Profile</a></li>
                   <li><a className="text-gray-600">Marketplace</a></li>
                   <li><a className="text-gray-600">Creators</a></li>
                   <li><a className="text-gray-600">Activity</a></li>
                                <li><a href="#" className="text-gray-600">Collections</a></li>
               </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Company</h3>
               <ul className="space-y-2">
                   <li><a className="text-gray-600">Upload</a></li>
                   <li><a className="text-gray-600">Connect wallet</a></li>
                   <li><a className="text-gray-600">Our blog</a></li>
                   <li><a className="text-gray-600">Item details</a></li>
                   <li><a className="text-gray-600">Contact us</a></li>
               </ul>
            </div>

         <div >
            <h3 className='font-semibold mb-4'>Join NewsLetters</h3>
               <div className='flex flex-col sm:flex-row items-center rounded-lg p-1 shadow-md bg-white'>
                   <input type="email" placeholder='Your Email'
                      className='bg-white px-4 py-1 text-gray-700 outline-none w-full sm:w-auto mb-3 sm:mb-0 rounded-md'/>
                   <button className='bg-blue-500 text-white flex items-center justify-center px-4 py-1 rounded-md -ml-12'>
                        Subscribe
                    </button>
              </div>

              <div className="flex flex-wrap mt-6 gap-3 justify-center sm:justify-start">
                 <a  className="text-gray-600 cursor-pointer h-8 w-8 rounded-md bg-white flex items-center justify-center shadow-lg"><FaTwitter /></a>
                 <a  className="text-gray-600 cursor-pointer h-8 w-8 rounded-md bg-white flex items-center justify-center shadow-lg"><AiFillInstagram /> </a>
                 <a  className="text-gray-600 cursor-pointer h-8 w-8 rounded-md bg-white flex items-center justify-center shadow-lg"><FaYoutube /> </a>
                 <a className="text-gray-600 cursor-pointer h-8 w-8 rounded-md bg-white flex items-center justify-center shadow-lg"><FaGithub />  </a>
                 <a  className="text-gray-600 cursor-pointer h-8 w-8 rounded-md bg-white flex items-center justify-center shadow-lg"><FaFacebookSquare /> </a>
             </div>
         </div>

      </div>
      
    </div>
  )
}

export default Footer