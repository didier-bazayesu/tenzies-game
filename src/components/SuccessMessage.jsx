import React from 'react'
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function SuccessMessage({successMessage,showMessage}) {
    const { width, height } = useWindowSize();
    return (
    <div>
         {showMessage && (
        <>
            <Confetti
            width={width}
            height={height}
            recycle={true}
            numberOfPieces={400}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
            <div className="bg-white px-8 py-6 rounded-xl shadow-xl text-center relative">
                
                <button
                onClick={successMessage}
                className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg font-bold cursor-pointer"
                
                >
                ×
                </button>

                <h2 className="text-2xl font-bold text-[#5035ff] mb-2">
                🎉 Congratulations!
                </h2>
                <p className="text-gray-700">
                You won the game. All dice match perfectly!
                </p>
            </div>
            </div>
       </>)}

    </div>
  )
}

export default SuccessMessage