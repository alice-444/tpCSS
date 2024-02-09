import Image from "next/image";
import { useState, useEffect } from "react";

const Birthday = ({ personName }) => {
  personName = "Max Richet";

  const [bgColor, setBgColor] = useState("bg-pink-400");

  // change automatiquement la couleur de l'arrière-plan
  useEffect(() => {
    const colors = [
      "bg-pink-400",
      "bg-blue-400",
      "bg-green-400",
      "bg-yellow-400",
    ];
    let index = 0;

    const intervalId = setInterval(() => {
      setBgColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 5000); // Changement de couleur toutes les 5 secondes

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`${bgColor} h-full flex items-center justify-center flex-col`}
    >
      <p className="flex items-center justify-center flex-col mb-8 flex-grow">
        <Image
          src="/birthday.svg"
          width={350}
          height={350}
          alt="Birthday Image"
          className="animate-spin-slow"
        />
        {personName && (
          <span className="mt-4 ml-2 font-semibold text-5xl">{personName}</span>
        )}
      </p>
    </div>
  );
};

export default Birthday;
