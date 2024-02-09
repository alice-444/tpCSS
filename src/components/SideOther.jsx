import Quote from "@/components/Quote.jsx";
import SideImage from "@/components/SideImage.jsx";
const SideOther = () => {
  return (
    <div className="bg-white grid grid-cols-1">
      <Quote
        quote="I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times, I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."
        author=" - Michael Jordan"
      />
      <div className="my-4"></div>
      <SideImage />
    </div>
  );
};

export default SideOther;
