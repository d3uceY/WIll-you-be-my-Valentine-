import React from "react"
import './App.css'
import { useState } from "react"

import { Howl } from "howler"

import confetti from "canvas-confetti";

import { useParams, useLocation } from "react-router-dom";


//cat images
import cat1 from './assets/cat-9.gif'
import cat2 from './assets/cat-10.gif'
import cat3 from './assets/cat-11.gif'
import cat7 from './assets/cat-15.gif'
import cat8 from './assets/cat-8.gif'
import cat9 from './assets/cat-13.gif'

import speakerOnImg from './assets/speaker-on.svg'
import speakerOffImg from './assets/speaker-off.svg'

//sound
import slip from './assets/slip.mp3'
import confettiSound from './assets/confetti.mp3'
import pop from './assets/pop.mp3'



export default function Valentine() {

    const location = useLocation();

    // console.log(location);

    // console.log(window.location.origin)

    const { name } = useParams()

    // currently playing sound 
    const [sound, setSound] = useState(false)

    // amount of no counts
    const [noCount, setNoCount] = useState(1);


    //
    const [soundOn, setSoundOn] = useState(true);

    // trust me, this is not what triggers the event
    const [catchMeIfYouCanLilBro, setCatchMeIfYouCanLilBro] = useState(false)

    // track if yes is clicked
    // your crush won't click yes, btw
    // they don't fw u like that
    const [theySaidYes, setTheySaidYes] = useState(false)

    // cat pictures in an array
    // do you know i hate cats? like
    // seriously, why would someone keep cats at home? 
    // (⌐■_■)Deuce
    const cats = [cat7, cat2, cat8, cat3, cat1]



    // i think it's obvious what this is
    const noButtonMessages = [
        ["Are you sure?", "🥺"],
        ["But why tho?", "😢"],
        ["I'll be sad...", "😭"],
        ["Not on my watch", "😤"]
    ];

    //yes
    const yesResponses = [
        "Yay! You just made my day! ❤️😊",
        "Best. Day. Ever. 😍💃",
        "I knew you couldn’t resist me! 😉💕",
        "About time! 😏💘",
        "No take-backs! You're stuck with me now. 😜❤️",
        "Wait, you actually said yes? *Faints dramatically* 🤯💞",
        "OMG OMG OMG!! 🥳💃🎉",
        "Let’s celebrate! 🥂✨",
        "BRB, telling everyone I just won at life! 😎🔥"
    ];



    //confetti effect
    const launchConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };



    // speaking of sound, I'll put you guys on Good music
    // listen to Alt-j, i love this band so much
    // (⌐■_■) Deuce
    const playSound = (soundSrc) => {
        if (!soundOn) return
        const newSound = new Howl({
            src: [soundSrc],
            volume: 1,
            onend: ''
        });

        setSound(newSound);

        //this is just to prevent overlapping sound
        //stop sound when a sound is already playing
        if (sound) {
            sound.stop();
        }
        newSound.play();

    };


    // you know that function you make
    // but you are probably never going to use?
    // yup, it's this one  (⌐■_■) Deuce

    const stopSound = () => {
        if (sound) {
            sound.stop();
        }
    };



    // obvious what this does
    const handleNoCount = (e) => {

        if (noCount !== 5) {
            playSound(pop)
            setNoCount((prev) => prev + 1);
        } else {
            setCatchMeIfYouCanLilBro(true);
            handleRandomLocation(e)
        }
    };



    // Making this hits home when you 
    // don't have a girlfriend (ﾉಥ益ಥ）ﾉ ┻━┻
    // anyway, this is the function that handle all the random movement
    // so the math is simple. button height and width is y and x axis respectively
    // when you subtract it from the window's width, it prevents the button from 
    // going outside when you are setting the random positions
    // so just incase you steal this code and you change the button size and it is 
    // going out bounds, change the button width and height to fit (⌐■_■) Deuce

    const handleRandomLocation = (e) => {
        if (noCount < 5) return

        const noButtonWidth = 184;
        const noButtonHeight = 82;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxWidth = windowWidth - noButtonWidth;
        const maxHeight = windowHeight - noButtonHeight;

        const top = Math.floor(Math.random() * maxHeight);
        const left = Math.floor(Math.random() * maxWidth);

        e.currentTarget.style.position = 'absolute'
        e.currentTarget.style.top = `${top}px`
        e.currentTarget.style.left = `${left}px`


        playSound(slip)

    };



    return (
        <>
            <div className="h-screen main-container flex justify-center items-center">
                <button
                    className="absolute top-4 left-4"
                    onClick={() => setSoundOn(!soundOn)}
                >
                    {
                        soundOn ?
                            <img className="w-10" src={speakerOnImg} alt="" />
                            :
                            <img className="w-10" src={speakerOffImg} alt="" />
                    }

                </button>
                <div>
                    <div>
                        <div className="image-container w-[200px] mx-auto">
                            {
                                theySaidYes ?
                                    <img className="h-full w-full" src={cat9} alt="" />
                                    :
                                    <img className="h-full w-full" src={cats[noCount - 1]} alt="" />
                            }
                        </div>
                        {
                            !theySaidYes ?
                                <h1 className="font-boogaloo text-5xl text-center italic text-[#BD1E91]">
                                    {`${name ? name + " ,w" : "W"}ill you be my Valentine?`}
                                </h1>
                                :
                                <h2 className="font-boogaloo text-5xl text-center italic text-[#BD1E91]">
                                    {yesResponses[Math.floor(Math.random() * (yesResponses.length - 1))]}
                                </h2>
                        }
                    </div>
                    {theySaidYes && " " ||
                        <div className="flex gap-4 mt-12 w-fit mx-auto items-center">
                            <button
                                onClick={() => {
                                    launchConfetti();
                                    setTheySaidYes(true)
                                    playSound(confettiSound)
                                }}
                                className={`bg-[#22C55E] heartbeat font-semibold  text-white px-4 py-2 rounded-lg transition-all`}
                                style={{ fontSize: noCount < 1 ? "30px" : `${noCount * 30}px` }}>
                                Yes
                            </button>
                            <div
                                onMouseOver={handleRandomLocation}
                                onClick={
                                    handleNoCount
                                }
                                className={`${catchMeIfYouCanLilBro ? 'p-2  flex items-center justify-center transition-all' : 'transition-all'}`}>
                                <button
                                    className="bg-red-500 font-semibold text-[30px]  text-white px-5 py-2 rounded-lg"
                                    style={{ fontSize: noCount > 1 && "1rem" }}>
                                    {
                                        (noCount > 1) ? (
                                            <>
                                                {noButtonMessages[noCount - 2][0]} <br />
                                                {noButtonMessages[noCount - 2][1]}
                                            </>
                                        ) : 'No'
                                    }

                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}