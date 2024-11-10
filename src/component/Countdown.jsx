import React, { useState, useEffect } from "react";
import Quotes from "./Quotes";
import RandomQutoes from "./RandomQutoes";
import Smhandels from "../Smhandels";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "Nov 17, 2024 00:00:00";

  const getTime = () => {
    const time = new Date(deadline) - new Date();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" ">
      <div className="grid grid-cols-2 justify-center gap-10 md:flex m-3">
        <div className="bg-white rounded-md p-4 px-6 shadow-lg ">
          <p
            id="day"
            className="text-black text-3xl font-extrabold flex justify-center font-mono "
          >
            {days < 10 ? "0" + days : days}
          </p>
          <span className="text-xs  text-black flex justify-center">
            Days
          </span>
        </div>
        <div className=" bg-white rounded-md p-4 px-7 shadow-lg">
          <p
            id="hours"
            className=" text-black text-3xl font-extrabold flex justify-center font-mono"
          >
            {hours < 10 ? "0" + hours : hours}
          </p>
          <span className="text-xs text-black flex justify-center">
            hours
          </span>
        </div>
        <div className="bg-white rounded-md p-3 px-5 shadow-lg">
          <p
            id="minutes"
            className="text-black text-3xl font-extrabold mt-1 flex justify-center font-mono"
          >
            {minutes < 10 ? "0" + minutes : minutes}
          </p>
          <span className="text-xs text-black flex justify-center">
            minutes
          </span>
        </div>
        <div className="bg-white rounded-md p-3 px-5 shadow-lg">
          <p
            id="seconds"
            className="text-black text-3xl font-extrabold mt-1 flex justify-center font-mono "
          >
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
          <span className="text-xs text-black flex justify-center">
            seconds
          </span>
        </div>
      </div>
      {/* mobile */}
      <div className="flex justify-center items-center">
        <Smhandels />
      </div>
      <div className="flex justify-center items-center mt-10 p-5">
        <RandomQutoes />
      </div>
    </div>
  );
};

export default Countdown;
