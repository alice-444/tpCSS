import Header from "@/components/Header.jsx";
import SideOther from "@/components/SideOther.jsx";
import Birthday from "@/components/Birthday.jsx";

const Home = () => {
  return (
    <main className="h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="w-full border-r border-black border-0">
          <Birthday />
        </div>
        <div className="w-full">
          <SideOther />
        </div>
      </div>
    </main>
  );
};

export default Home;
