import React from "react"
import './App.css'
import { useState } from "react"
import { Howl } from "howler"

//cat images
import cat1 from './assets/cat-9.gif'
import cat2 from './assets/cat-10.gif'
import cat3 from './assets/cat-11.gif'
import cat4 from './assets/cat-12.gif'
import cat5 from './assets/cat-13.gif'
import cat6 from './assets/cat-14.gif'
import cat7 from './assets/cat-15.gif'
import slip from './assets/slip.mp3'


export default function App() {

  const [sound, setSound] = useState(false)

  const [noCount, setNoCount] = useState(1);




  // Function to initialize and play the sound
  const playSound = () => {
    const newSound = new Howl({
      src: [slip], // Update with the correct path
      volume: .5, // Adjust volume (0.0 - 1.0)
      onend: () => console.log("Sound finished playing"),
    });

    setSound(newSound);
    newSound.play();
  };




  const stopSound = () => {
    if (sound) {
      sound.stop();
    }
  };



  const handleNoCount = (e) => {
    if (noCount > 5) return

    if (noCount !== 5) {
      setNoCount((prev) => prev + 1);
    } else {
      handleRandomLocation(e)
    }
  };

  const handleRandomLocation = (e) => {
    if (noCount < 5) return

    const noButtonWidth = 150;
    const noButtonHeight = 61;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxWidth = windowWidth - noButtonWidth;
    const maxHeight = windowHeight - noButtonHeight;

    const top = Math.floor(Math.random() * maxHeight);
    const left = Math.floor(Math.random() * maxWidth);

    e.target.style.position = 'absolute'
    e.target.style.top = `${top}px`
    e.target.style.left = `${left}px`

    playSound()
  };



  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div>
          <div>
            <div className="image-container w-[200px] mx-auto">
              <img className="h-full w-full" src={cat1} alt="" />
            </div>
            <h1 className="font-boogaloo text-5xl text-center">Will you be my Valentine?</h1>
          </div>

          <div className="flex gap-4 mt-12 w-fit mx-auto items-center">
            <button className={`bg-[#22C55E] heartbeat font-semibold  text-white px-4 py-2 rounded-lg`} style={{ fontSize: noCount < 1 ? "30px" : `${noCount * 30}px` }}>Yes</button>
            <button onMouseOver={handleRandomLocation} onClick={handleNoCount} className="bg-red-500 font-semibold text-[30px] transition-all text-white px-5 py-2 rounded-lg">No</button>
          </div>
        </div>
      </div>
    </>
  )
}