import React from 'react'

function Die({id,value,isHeld,handleSingleButton}) {
    const style = {
        backgroundColor : isHeld ? '#59e391' : "white"
    }


   
  return (
    <button
        className='
        hover:bg-amber-500
        hover:cursor-pointer
        rounded-xl
        w-16 h-16
        text-2xl
        shadow-md
        '
        key={id}
        style={style}
        onClick={handleSingleButton}
        >
         {value}
    </button>
  )
}

export default Die