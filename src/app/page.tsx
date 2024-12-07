
import Image from "next/image";
import maaz from "../../image/WhatsApp Image 2024-11-21 at 05.19.20_f7593a19.jpg";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 font-sans bg-[#73b890] text-center">
      <Navbar/>

      <div className="my-10 p-4 sm:p-8 bg-white text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 italic text-gray-800 underline">
          Maaz Portfolio
        </h1>
        <div className="flex justify-center items-center my-8">
          <Image
            src={maaz}
            alt="maaz-pic"
            height={450}
            width={450}
            className="sm:h-72 sm:w-72"
          />
        </div>
        <p className="text-lg">
          <b>Hello, I am Syed Maaz Ali</b>{" "}
          <i>
            — I am a front-end developer and currently working as a software
            developer.
          </i>{" "}
          <br />
          <b className="underline">My skills are:</b>
          <br />
          <i>
            HTML <br />
            CSS <br />
            TypeScript
          </i>
        </p>
      </div>
    </div>
  );
}
