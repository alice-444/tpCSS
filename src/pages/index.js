// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header.jsx";
import SideOther from "@/components/SideOther.jsx";
import SideBirthday from "@/components/SideBirthday.jsx";

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    <main>
      <div className="">
        <Header />
        <SideBirthday />
        <SideOther />
      </div>
    </main>
  );
}
