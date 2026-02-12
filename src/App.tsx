"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are u sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a cheese cake on top",
      "What about a Jung-won?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to khafid's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "kumohoonon :(",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            className="h-[300px]"
            src="https://media1.tenor.com/m/QxUjjkdzLqIAAAAC/minions-cheering.gif"
            alt="Minions cheering gif"
          />
          <div className="my-4 text-4xl font-bold">YEAYY!!! I love yue!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/kutFNFXxSIsAAAAd/minion-minion-loves.gif"
            alt="Minion loves gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Val?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
