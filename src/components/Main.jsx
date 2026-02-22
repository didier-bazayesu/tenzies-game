import React, { useState } from 'react'

function Main() {
    let[dice,setDice]= useState(generateAllNumber())
    function generateAllNumber (){
        let array = []
        for(let i=1 ; i<=10 ;i++ ) {
             let data = Math.floor(Math.random()*6) 
             if(data == 0) data = 1;
             array.push(data);
        }
        console.log("rendered")
        return array
        
    }
   
  return (
    <section className="bg-black w-full h-screen p-5">

      <div className="bg-gray-200 w-full h-full flex justify-center items-center rounded-xl ">
          <div className='grid grid-cols-5 grid-rows-2 gap-5'>
        {dice.map((elem,index)=> 
           <button 
             key={index}
            className='
            hover:bg-amber-400
            hover:cursor-pointer
            rounded-xl
            w-16 h-16
            text-2xl
            shadow-md
            '>
            {elem}</button>
      )}
       </div>
      </div>
    </section>
  )
}

export default Main
