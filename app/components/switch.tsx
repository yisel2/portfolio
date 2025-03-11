"use client";
import { useState } from "react";
export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex items-center">
      <button
        onClick={toggleSwitch}
        className={`w-14 h-8 flex items-center ${
          isOn ? "bg-green-500" : "bg-gray-300"
        } rounded-full p-1 transition-colors`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
      <span className="ml-2">{isOn ? "Encendido" : "Apagado"}</span>
    </div>
  );
}
