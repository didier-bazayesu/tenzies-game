import React, { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import Die from './Die';
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";




function Main() {
 
    let[dice,setDice]= useState(()=>generateAllNumber())
 
    //check won

    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    const gameWon = dice.every(die => die.isHeld) && allSameValue;
    const buttonRef = useRef();
    const { width, height } = useWindowSize();
    const [showMessage, setShowMessage] = useState(false);


   


    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus();
            setShowMessage(true);
        }
    }, [gameWon])


    function generateAllNumber (){
        console.log("rendered")
        return new Array(10).fill(0).map(()=> ({value:Math.floor(Math.random() * 6 +1), isHeld : false,id : nanoid()})); 
    }
   
    function handleClick(){
        if(!gameWon){
            setDice(prev=> prev.map((elem)=> {
                return elem.isHeld ? elem : {...elem , value : Math.floor(Math.random()* 6 +1)}
            }));

        }else {
            setDice(generateAllNumber());
        }

    }
    
    function handleSingleButton(singleId){
        
        setDice(prev=> prev.map((elem,index)=> index == singleId ? {...elem , isHeld: !elem.isHeld} : elem))

    } 

    function successMessage(){
             setShowMessage(false);
            setDice(generateAllNumber());
    }

  
    
    let diceButtons = dice.map((elem, index )=> (<Die key={elem.id} handleSingleButton={()=>handleSingleButton(index)} value={elem.value} isHeld={elem.isHeld}/>))

   
  return (
    <section className="bg-black w-full h-screen p-5">

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
  </>
       )}




      <div className="bg-gray-200 w-full h-full flex justify-evenly items-center rounded-xl flex-col gap-y-5">
            <h1 className="text-xl font-bold">Tenzies</h1>
            <p className="flex">Roll until all dice are the same.  <br />Click each die to freeze it at its current value between rolls.</p>
          <div className='grid grid-cols-5 grid-rows-2 gap-5'>
                {diceButtons}  
            </div>

            <button  ref={buttonRef}
             className='bg-[#5035ff] text-center px-5 py-1.5 rounded-sm text-white cursor-pointer'
             onClick={handleClick}
            >{ gameWon? "New Game" : "Roll"}</button>
        </div>
    </section>
  )
}

export default Main
