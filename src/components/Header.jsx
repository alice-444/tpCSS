import { useState, useEffect } from "react";
const Header = () => {
  // Obtention de la date du jour
  // const currentDate = new Date();

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Mise à jour de l'heure toutes les secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //formatage pour la date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDateTime = new Intl.DateTimeFormat("fr-FR", options).format(
    currentDateTime
  );

  const formattedTime = formattedDateTime.replace("à", "|");

  return (
    <div>
      <div className="flex justify-between items-center mx-4 py-auto p-3">
        <p className="font-bold uppercase text-xl">citation et anniversaires</p>
        <p className="font-bold uppercase text-xl">{formattedTime}</p>
      </div>
      <hr className="my-0 h-0.5 border-0 bg-black" />
    </div>
  );
};

export default Header;
