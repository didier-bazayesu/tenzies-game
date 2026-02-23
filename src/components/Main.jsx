import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import Die from './Die';


function Main() {
    let[dice,setDice]= useState(generateAllNumber())
    function generateAllNumber (){
        return new Array(10).fill(0).map(()=> ({value:Math.floor(Math.random() * 6 +1), isHeld : false,id : nanoid()})); 
    }
   
    function handleClick(){
        setDice(generateAllNumber());

    }
    
    let diceButtons = dice.map(elem => (<Die key={elem.id} value={elem.value} isHeld= {elem.isHeld}/>))

   console.log(diceButtons);
  return (
    <section className="bg-black w-full h-screen p-5">

      <div className="bg-gray-200 w-full h-full flex justify-center items-center rounded-xl flex-col gap-y-5">
          <div className='grid grid-cols-5 grid-rows-2 gap-5'>
                {diceButtons}  
            </div>

            <button  
             className='bg-[#5035ff] text-center px-5 py-1.5 rounded-sm text-white cursor-pointer'
             onClick={handleClick}
            >Roll</button>
        </div>
    </section>
  )
}

export default Main
