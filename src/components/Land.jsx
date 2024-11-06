import React from 'react'

const Land = () => {
  return (
<div className="bg-gradient-to-tr from-amber-100 to-blue-100 flex flex-col lg:flex-row items-center lg:justify-between p-6  lg:px-16 pt-10 lg:pt-20">
             
 
  <div className="text-center lg:text-left lg:w-1/2 px-4 mb-0 lg:mr-4">
    <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 text-stroke ">NFT</h1>
    <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 text-stroke">MARKETPLACE</h1>
    <h1 className="text-4xl lg:text-6xl font-bold text-pink-500 mt-4">BASED ON</h1>
    <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-b from-pink-500 via-pink-300 to-transparent bg-clip-text text-transparent">KALPTANTRA</h1>

    <div className="flex mt-8 space-x-4 justify-center lg:justify-start">
      <button className="px-6 lg:px-8 py-1 text-sm lg:text-base bg-yellow-500 text-white font-bold rounded">
        Explore NFTs
      </button>
      <button className="px-6 lg:px-8 py-1 text-sm lg:text-base bg-white text-black font-bold border border-black rounded">
        Create NFT
      </button>
    </div>
  </div>


  <div className="lg:w-1/2 flex justify-center lg:justify-end lg:mt-0 mt-8 lg:mx-20 px-4">
    <div className="relative">
      <img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/483/6225/55Figure26__48755__16448.1506573867.jpg?c=2&imbypass=on" alt="Colorful paint"
        className="rounded-lg shadow-2xl w-60 h-60 lg:w-80 lg:h-80"/>
      <div className="absolute bottom-4 -left-10">
        <img  src="https://png.pngtree.com/png-clipart/20190603/original/pngtree-black-rim-star-painted-circle-png-image_532132.jpg"  alt="certified"
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"/>
      </div>
    </div>
  </div>
</div>



  )
}

export default Land