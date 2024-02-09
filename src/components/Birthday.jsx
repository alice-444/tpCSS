import Image from "next/image";

const Birthday = ({ personName }) => {
  personName = "Max Richet";
  return (
    <div className="bg-pink-400 h-auto flex items-center justify-center flex-col">
      <p className="flex items-center justify-center flex-col">
        <Image
          src="/birthday.svg"
          width={350}
          height={350}
          alt="Birthday Image"
          className="animate-spin-slow"
        />
        {personName && (
          <span className="ml-2 font-semibold text-5xl">{personName}</span>
        )}
      </p>
    </div>
  );
};

export default Birthday;
