import React from 'react'

function Die({id,value,isHeld}) {
    const style = {
        backgroundColor : isHeld ? 'green' : "white"
    }
   
  return (
    <button
        className='
        hover:bg-amber-400
        hover:cursor-pointer
        rounded-xl
        w-16 h-16
        text-2xl
        shadow-md
        '
        key={id}
        style={style}
        >
         {value}
    </button>
  )
}

export default Die