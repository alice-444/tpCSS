const Header = () => {
  // Obtention de la date du jour
  const currentDate = new Date();

  //formatage pour la date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
    currentDate
  );
  return (
    <div>
      <div className="flex justify-between items-center mx-4 h-full">
        <p className="font-semibold">CITATION ET ANNIVERSAIRES</p>
        <p className="font-semibold uppercase">{formattedDate}</p>
      </div>
      <hr className="my-8 h-0.5 border-0 bg-black" />
    </div>
  );
};

export default Header;
