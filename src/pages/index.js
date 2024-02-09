// // import { Inter } from "next/font/google";

// // const inter = Inter({ subsets: ["latin"] });

// import Header from "@/components/Header.jsx";
// import SideOther from "@/components/SideOther.jsx";
// import Birthday from "@/components/Birthday.jsx";

// export default function Home() {
//   return (
//     // <main
//     //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     // >
//     <main>
//       <div>
//         <Header />
//         <div className="flex h-screen">
//           <div className="w-1/2">
//             <Birthday />
//           </div>
//           <div className="w-1/2">
//             <SideOther />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import Header from "@/components/Header.jsx";
import SideOther from "@/components/SideOther.jsx";
import Birthday from "@/components/Birthday.jsx";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="w-full">
          <Birthday />
        </div>
        <div className="w-full">
          <SideOther />
        </div>
      </div>
    </main>
  );
}
