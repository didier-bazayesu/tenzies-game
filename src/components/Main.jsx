import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import Die from './Die';


function Main() {
 
    let[dice,setDice]= useState(generateAllNumber())
 
    //check won

    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    const gameWon = dice.every(die => die.isHeld) && allSameValue;
   


    function generateAllNumber (){
        return new Array(10).fill(0).map(()=> ({value:Math.floor(Math.random() * 6 +1), isHeld : false,id : nanoid()})); 
    }
   
    function handleClick(){
        setDice(prev=> prev.map((elem)=> {
            return elem.isHeld ? elem : {...elem , value : Math.floor(Math.random()* 6 +1)}
        }));

    }
    
    function handleSingleButton(singleId){
        
        setDice(prev=> prev.map((elem,index)=> index == singleId ? {...elem , isHeld: !elem.isHeld} : elem))

    } 

  
    
    let diceButtons = dice.map((elem, index )=> (<Die key={elem.id} handleSingleButton={()=>handleSingleButton(index)} value={elem.value} isHeld={elem.isHeld}/>))

   
  return (
    <section className="bg-black w-full h-screen p-5">

      <div className="bg-gray-200 w-full h-full flex justify-evenly items-center rounded-xl flex-col gap-y-5">
            <h1 className="text-xl font-bold">Tenzies</h1>
            <p className="flex">Roll until all dice are the same.  <br />Click each die to freeze it at its current value between rolls.</p>
          <div className='grid grid-cols-5 grid-rows-2 gap-5'>
                {diceButtons}  
            </div>

            <button  
             className='bg-[#5035ff] text-center px-5 py-1.5 rounded-sm text-white cursor-pointer'
             onClick={handleClick}
            >{ gameWon? "Game Over" : "Roll"}</button>
        </div>
    </section>
  )
}

export default Main
