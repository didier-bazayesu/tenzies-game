import React from 'react'

function Die({id,value,isHeld,index}) {
    const style = {
        backgroundColor : isHeld ? 'green' : "white"
    }

    function handleSingleButton(singleId){
      console.log(singleId)
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
        onClick={()=>{handleSingleButton(index)}}
        >
         {value}
    </button>
  )
}

export default Die