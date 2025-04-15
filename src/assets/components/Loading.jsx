import React from 'react'

const Loading = () => {
  return (
    <div className=" fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-black text-gray-200">
      <div className="flex flex-col items-center">
        <div
          className="relative mb-10 w-84 h-64 sm:w-80 sm:h-52 animate-gentleBob overflow-hidden rounded-sm" 
        >
          <img
            src="vn-flag-full.gif"
            alt="" 
            aria-hidden="true" 
            className="absolute inset-0 w-full h-full object-cover filter" 
          />

        </div>

        <div className="text-center animate-textFadeIn animation-delay-[1000ms]">
           <p className="mb-2 text-lg sm:text-xl text-white">
            Cùng <span className="font-semibold text-yellow-400">NGUYEN DUC VIET</span>
          </p>
          <h1 className="mb-3 text-2xl sm:text-3xl font-bold text-white">
            Chào Mừng 50 Năm Thống Nhất Đất Nước
          </h1>
          <p className="text-base sm:text-lg text-white">
            30/04/1975 - 30/04/2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loading